'use client'

import ProjectCard from './ProjectCard'
import { projects } from '@/app/_constants/projects'

export default function ProjectsDisplay() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 w-full justify-items-center lg:gap-x-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.name}
          description={project.description}
          githubLink={project.githubLink && project.githubLink}
          img={project.img}
          link={project.link}
          name={project.name}
          status={project.status}
          techs={project.techs}
        />
      ))}
    </div>
  )
}
