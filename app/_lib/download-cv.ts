'use client'
export function downloadCV(filename = 'GabrielGroteCv.pdf') {
  const link = document.createElement('a')
  link.href = '/files/GabrielGroteCv.pdf'
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
