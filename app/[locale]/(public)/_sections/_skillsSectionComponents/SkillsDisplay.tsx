'use client'

import { skills } from '@/app/_constants/skills'
import SkillCard from './SkillCard'

export default function SkillsDisplay() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-2 gap-y-4">
      {skills.map((skill, index) => (
        <SkillCard
          badgeColor={[1, 3, 5, 7, 9].includes(index)}
          color={skill.color}
          key={skill.name}
          techs={skill.techs}
          name={skill.name}
          icon={skill.icon}
        />
      ))}
    </div>
  )
}
