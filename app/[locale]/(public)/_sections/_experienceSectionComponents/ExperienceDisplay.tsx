'use client'

import { experiences } from '@/app/_constants/experiences'
import ExperienceCard from './ExperienceCard'

export default function ExperienceDisplay() {
  return (
    <div className="flex flex-col justify-center gap-y-4 ">
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.company}
          activities={experience.activities}
          company={experience.company}
          date={experience.date}
          location={experience.location}
          position={experience.position}
        />
      ))}
    </div>
  )
}
