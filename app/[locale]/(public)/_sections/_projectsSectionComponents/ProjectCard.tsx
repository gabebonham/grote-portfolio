'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardFooter } from '@/components/ui/card'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
interface Props {
  name: string
  link: string | undefined
  techs: string[]
  img: StaticImageData
  description: string
  status: string
  githubLink: string | undefined
}
export default function ProjectCard({
  link,
  name,
  img,
  description,
  techs,
  status,
  githubLink,
}: Props) {
  console.log(img.src)
  return (
    <Card
      className="rounded-3xl max-w-96 w-full h-[450px] p-0 bg-white/90 flex justify-center items-center  border-t border-l border-black
    border-r-[5px] md:h-[412px] transition-all hover:border-r-[11px] border-b-[5px] hover:border-b-[11px]  "
    >
      <Link
        target="_blank"
        href={link || '/'}
        className="flex justify-center items-center"
      >
        <div
          style={{ backgroundImage: `url(${img.src})` }}
          className={`rounded-full size-72 xl:max-w-full xl:max-h-full lg:max-w-4/6 lg:max-h-4/6 bg-cover bg-center border-1 border-black `}
        >
          <div className="h-1/2 flex justify-start">
            <Card className="p-2 text-sm w-2/3 h-fit  border-black">
              {name}
            </Card>
          </div>
          <div className="h-1/2 flex justify-end items-end w-full">
            <Card className="p-2 h-fit text-sm w-2/3 border-black">
              {description}
            </Card>
          </div>
        </div>
      </Link>
      <CardFooter className="flex flex-col gap-y-0 ">
        <div className="">
          {techs.map((skill) => (
            <Badge className="mr-2" key={skill}>
              {skill}
            </Badge>
          ))}
        </div>
        <div className="flex flex-col item-center gap-y-2">
          {githubLink ? (
            <Link
              target="_blank"
              className="text-mainBlueLight"
              href={githubLink || 'https://github.com/gabebonham'}
            >
              Link para o github
            </Link>
          ) : (
            <p className="text-red-600">Código fonte privado.</p>
          )}
           {status &&status=="desenvolvimento" ? (
            <p className="text-red-400">Em desenvolvimento.</p>
          ) : (
            <></>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
