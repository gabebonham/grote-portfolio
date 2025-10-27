'use client'

import ProjectsDisplay from './_projectsSectionComponents/ProjectsDisplay'

export default function ProjectsSection() {
  return (
    <section className="flex flex-col gap-y-6 duration-200 transition-all fade-in-up">
      <div className="w-full text-center gap-y-4 flex-col flex py-1">
        <h1 className="text-center text-3xl font-bold lg:text-5xl lg:pb-6">
          Alguns dos meus Projetos
        </h1>
      </div>
      <div>
        <ProjectsDisplay />
      </div>
    </section>
  )
}
