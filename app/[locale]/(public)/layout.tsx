import { ReactNode } from 'react'
import PublicFooter from './_components/PublicFooter'
import PublicHeader from './_components/PublicHeader'

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <main className=" bg-gradient-to-b from-secondaryBlue/50 to-mainBlue flex flex-col min-h-screen h-full justify-between text-mainDark scrollbar-hidden">
      <PublicHeader />
      <div className="px-6 lg:px-18 min-h-screen h-full  ">{children}</div>
      <PublicFooter />
    </main>
  )
}
