'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import * as LucideIcons from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ComponentType } from 'react'
interface Props {
  type: 'primary' | 'secondary'
  action?: Function
  css?: string
  label?: string
  icon?: keyof typeof LucideIcons
  href?: string
}
export default function CButton({
  href,
  type,
  action,
  css,
  label,
  icon,
}: Props) {
  const router = useRouter()
  const IconComponent = icon ? (LucideIcons[icon] as ComponentType<any>) : null
  const actionHandler = async () => {
    action && action()
  }
  if (type == 'primary') {
    return (
      <Button
        onClick={actionHandler}
        className={cn(
          'lg:text-xl lg:py-6 lg:rounded-lg hover:text-mainDark hover:bg-mainGray cursor-pointer border text-mainGray border-mainGray bg-mainDark text-xs flex items-center justify-center',
          css,
        )}
      >
        {IconComponent && <IconComponent className="w-4 h-4 lg:size-5" />}
        {label}
      </Button>
    )
  }
  if (type == 'secondary') {
    return (
      <Button
        onClick={() => actionHandler()}
        className={cn(
          'lg:text-xl lg:py-6 lg:rounded-lg cursor-pointer hover:bg-mainDark border-1 hover:text-mainGray text-mainDark border-mainDark bg-mainGray text-xs flex items-center justify-center',
          css,
        )}
      >
        {IconComponent && <IconComponent className="w-4 h-4 lg:size-5" />}
        {label}
      </Button>
    )
  }
}
