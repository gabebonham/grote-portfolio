'use client'

import { aboutText } from '@/app/_constants/about'
import SkillsDisplay from './_skillsSectionComponents/SkillsDisplay'

export default function SkillsSection() {
  return (
    <section className="flex flex-col lg:gap-y-20 duration-200 transition-all fade-in-up">
      <div className="w-full text-center gap-y-4 lg:gap-y-12 flex-col flex py-1 items-center">
        <h1 className="text-center text-3xl font-bold lg:text-5xl">
          Minhas Skills
        </h1>
        <p className="text-justify lg:text-center lg:text-3xl sm:w-3/5">
          Algumas das habilidades que eu uso no dia a dia, mas como a demanda de
          desenvolvimento web é maior, tendo a preferir Next js e DotNet .
        </p>
      </div>
      <div>
        <SkillsDisplay />
      </div>
    </section>
  )
}
