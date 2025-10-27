import * as LucideIcons from 'lucide-react'
export const skills = [
  {
    name: 'Backend',
    icon: 'Server' as keyof typeof LucideIcons,
    color: 'text-orange-400',
    techs: [
      'Spring Boot',
      'DotNet',
      'Flutter',
      'Micro Services',
      'MVC',
      'REST',
      'Nest',
      'BFF',
    ],
  },
  {
    name: 'Frontend',
    icon: 'Code' as keyof typeof LucideIcons,
    color: 'text-blue-400',
    techs: ['Next Js', 'React', 'Flutter', 'React Native', 'Tailwind', 'Axios'],
  },
  {
    name: 'Database',
    icon: 'Database' as keyof typeof LucideIcons,
    color: 'text-gray-400',
    techs: ['SQL', 'ORMs', 'MongoDB', 'MySQL', 'Postgres', 'Oracle'],
  },
  {
    name: 'DevOps',
    icon: 'Container' as keyof typeof LucideIcons,
    color: 'text-yellow-400',
    techs: ['Docker', 'Deploy VPS', 'Git', 'CI/CD', 'Vercel', 'Buckets'],
  },
  {
    name: 'Outros',
    icon: 'LibraryBig' as keyof typeof LucideIcons,
    color: 'text-green-400',
    techs: [
      'Scrum',
      'Linux',
      'GitLab',
      'MQL5',
      'Inglês Avançado',
      'Automações',
    ],
  },
]
