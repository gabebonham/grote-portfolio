'use client'
import { menuItems } from '@/app/_constants/menu-items'
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Menu } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
interface Props {
  value: number
  setValue: (value: number) => void
}
export default function PublicMenuDrawer({ value, setValue }: Props) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const params = new URLSearchParams(searchParams.toString())
  const [open, setOpen] = useState<boolean>(false)
  const handleSetValue = (id: number) => {
    setOpen(false)
    setValue(id)
    params.set('section', id.toString())
    router.push(`?${params.toString()}`)
  }
  return (
    <Drawer
      direction="right"
      onOpenChange={(isOpen) => setOpen(isOpen)}
      open={open}
    >
      <DrawerTrigger onClick={() => setOpen(true)}>
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="space-y-2 px-4 py-4 bg-mainBlueDark ">
        <DrawerTitle className="py-4 text-2xl text-white">Menu</DrawerTitle>
        {menuItems.map((menuItem) => (
          <p
            key={menuItem.id}
            className={`text-lg cursor-pointer ${
              value == menuItem.id
                ? 'text-secondaryBlue underline underline-offset-2'
                : 'text-white'
            }`}
            onClick={() => handleSetValue(menuItem.id)}
          >
            {menuItem.label}
          </p>
        ))}
      </DrawerContent>
    </Drawer>
  )
}
