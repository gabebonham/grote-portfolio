import PublicFooter from './_components/PublicFooter'
import PublicHeader from './_components/PublicHeader'

export default function PublicLayout({
  children,
}: {
  children: React.ReactElement
}) {
  return (
    <main className=" bg-gradient-to-b from-secondaryBlue/50 to-mainBlue text-mainDark scrollbar-hidden">
      <PublicHeader />
      <div className="px-6 lg:px-18 pt-6 pb-12">{children}</div>
      <PublicFooter />
    </main>
  )
}
