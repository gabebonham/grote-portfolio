'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
interface Props {
  company: string
  date: string
  position: string
  location: string
  activities: string[]
}
export default function ExperienceCard({
  company,
  date,
  position,
  location,
  activities,
}: Props) {
  return (
    <Card className="p-0 px-4 py-2 gap-y-3 border-mainDark">
      <div className="flex items-center w-full justify-between ">
        <h1 className="md:py-2 md:text-3xl text-xl text-mainDark border-b-2 border-b-mainDark w-full">
          {company}
        </h1>
        <Badge className="rounded-xl md:text-lg text-white bg-mainDark">
          {date}
        </Badge>
      </div>
      <div className="flex items-center gap-x-2 ">
        <p className="text-sm text-mainBlueDark md:text-2xl">{position}</p>|
        <p className="text-sm text-mainBlueDark md:text-2xl">{location}</p>
      </div>
      <div className="flex flex-col items-start gap-y-1 pb-2 ">
        {activities.map((fun) => (
          <p key={fun} className="text-xs md:text-xl text-mainDark">
            {fun}
          </p>
        ))}
      </div>
    </Card>
  )
}
