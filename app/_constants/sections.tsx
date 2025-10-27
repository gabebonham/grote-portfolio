import AboutSection from '../[locale]/(public)/_sections/AboutSection'
import ContactSection from '../[locale]/(public)/_sections/ContactSection'
import ExperiencesSection from '../[locale]/(public)/_sections/ExperiencesSection'
import PresentationSection from '../[locale]/(public)/_sections/PresentationSection'
import ProjectsSection from '../[locale]/(public)/_sections/ProjectsSection'
import SkillsSection from '../[locale]/(public)/_sections/SkillsSection'

export const sections = [
  {
    id: 0,
    component: <PresentationSection />,
  },
  {
    id: 1,
    component: <AboutSection />,
  },
  {
    id: 2,
    component: <SkillsSection />,
  },
  {
    id: 3,
    component: <ProjectsSection />,
  },
  {
    id: 4,
    component: <ExperiencesSection />,
  },
  {
    id: 5,
    component: <ContactSection />,
  },
]
