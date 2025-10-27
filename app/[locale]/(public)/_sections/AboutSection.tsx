'use client'

import { aboutText } from '@/app/_constants/about'

export default function AboutSection() {
  return (
    <section className="duration-200 transition-all fade-in-up flex flex-col lgpx-48">
      <div className="w-full ">
        <div className="w-full flex flex-col gap-y-4">
          <h1 className="text-center text-3xl font-bold py-1 lg:text-5xl">
            Sobre mim
          </h1>
          <div className="text-justify lg:text-start lg:text-3xl/12 lg:indent-12 space-y-4">
            {aboutText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
