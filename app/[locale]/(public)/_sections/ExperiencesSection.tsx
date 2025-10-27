'use client'

import ExperienceDisplay from './_experienceSectionComponents/ExperienceDisplay'

export default function ExperiencesSection() {
  return (
    <section className="duration-200 transition-all fade-in-up flex flex-col gap-y-6">
      <div className="w-full text-center gap-y-4 flex-col flex py-1">
        <h1 className="text-center text-3xl font-bold lg:text-5xl lg:pb-6">
          Minhas Experiências
        </h1>
      </div>
      <div>
        <ExperienceDisplay />
      </div>
    </section>
  )
}
