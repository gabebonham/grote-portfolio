'use client'
import { menuItems } from '@/app/_constants/menu-items'
import { Bot } from 'lucide-react'
import { useState } from 'react'
import PublicMenuDrawer from './PublicMenuDrawer'
import { useRouter, useSearchParams } from 'next/navigation'

export default function PublicHeader() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const params = new URLSearchParams(searchParams.toString())
  const hasCurrentSectionId = params.has('section')
  let currentId = 0
  if (hasCurrentSectionId) {
    currentId = parseInt(params.get('section') as string)
  }
  const [currentSectionId, setCurrentSectionId] = useState<number>(currentId)
  const handleClick = (id: number) => {
    setCurrentSectionId(id)
    params.set('section', id.toString())
    router.push(`?${params.toString()}`)
  }

  return (
    <header className="flex px-6 py-4 items-center justify-between lg:justify-around lg:text-xl xl:text-2xl lg:py-6">
      <div className=" lg:w-11/12 lg:pl-12">
        <Bot className="lg:size-12" />
      </div>
      <div className="lg:block hidden w-full">
        <div className="bg-mainDark flex items-center w-fit lg:gap-x-10 px-8 py-2 rounded-3xl lg:py-2 lg:rounded-4xl">
          {menuItems.map((menuItem) => (
            <p
              key={menuItem.id}
              onClick={() => handleClick(menuItem.id)}
              className={`px-3 py-2 transition-colors duration-200  rounded-4xl  cursor-pointer ${
                currentSectionId == menuItem.id
                  ? 'text-mainDark bg-mainGray rounded-4xl'
                  : 'text-white  '
              }`}
            >
              {menuItem.label}
            </p>
          ))}
        </div>
      </div>
      <div className=" lg:w-full">
        <div className="lg:hidden">
          <PublicMenuDrawer
            setValue={setCurrentSectionId}
            value={currentSectionId}
          />
        </div>{' '}
      </div>
    </header>
  )
}
