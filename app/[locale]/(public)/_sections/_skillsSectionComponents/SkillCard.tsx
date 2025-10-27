'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import * as LucideIcons from 'lucide-react'
import { ComponentType } from 'react'
interface Props {
  name: string
  color: string
  icon: keyof typeof LucideIcons
  techs: string[]
  badgeColor: boolean
}
export default function SkillCard({
  icon,
  name,
  techs,
  color,
  badgeColor,
}: Props) {
  const IconComponent = icon ? (LucideIcons[icon] as ComponentType<any>) : null

  return (
    <Card
      className="transition-transform duration-300 ease-in-out hover:scale-105 
             py-5 px-3 bg-gradient-to-br from-mainWhite to-mainGray border-textDark/50"
    >
      <div className="flex items-center gap-x-2 lg:gap-x-4 text-xl text-mainBlueDark lg:text-3xl">
        {IconComponent && (
          <IconComponent className={`w-5 h-5 lg:size-8 ${color}`} />
        )}
        {name}
      </div>
      <div className="flex flex-wrap gap-x-2 gap-y-1">
        {techs.map((tech, index) => (
          <Badge
            key={tech}
            className={`rouded-2xl lg:text-sm text-xs ${
              badgeColor ? 'bg-mainBlueDark' : 'bg-mainBlueLight'
            }`}
          >
            {tech}
          </Badge>
        ))}
      </div>
    </Card>
  )
}
