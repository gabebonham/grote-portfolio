'use client'
import { sections } from '@/app/_constants/sections'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function SectionDisplay() {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())
  const hasCurrentSectionId = params.has('section')
  let currentSectionId = 0

  if (hasCurrentSectionId) {
    currentSectionId = parseInt(params.get('section') as string)
  }
  return (
    <div className={` lg:px-16 lg:py-12 `}>
      {sections.find((section) => section.id == currentSectionId)?.component}
    </div>
  )
}
