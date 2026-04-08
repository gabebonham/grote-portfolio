import h4 from '@/public/images/h4.png'
import blog from '@/public/images/blog.png'
import arcade from '@/public/images/arcade.jpg'
import chat from '@/public/images/chat.png'
import luma from '@/public/images/luma.png'
import whats from '@/public/images/whats.png'
import ever from '@/public/images/evere4.png'
import hma from '@/public/images/hma.png'
import chirp from '@/public/images/chirp.png'
import bijux from '@/public/images/bij.png'

export const projects = [
  {
    name: 'Chirp',
    link: 'https://connect-share-one.vercel.app',
    techs: ['Next Js', 'Nest', 'Postgres', 'Docker', 'VPS'],
    img: chirp,
    description:
      'Rede social simples e minimalista.',
    status: 'concluido',
  },
  {
    name: 'EverHedge',
    link: 'https://app.everhedge.com.br/login',
    techs: ['Supabase', 'Next Js', 'DotNet', 'Docker', 'VPS'],
    img: ever,
    description: 'Site que disponibiliza radares para o mercado financeiro.',
    status: 'concluido',
  },
  {
    name: 'HMACalculator',
    link: 'https://calculator-hma.vercel.app',
    techs: ['Vercel', 'Next Js', 'Nest', 'Docker', 'VPS'],
    img: hma,
    description: 'Site para calculos de HMA.',
    status: 'concluido',
  },
  {
    name: 'Arcade Lunar',
    techs: ['Flutter', 'Nest'],
    img: arcade,
    description: 'App de rede social para o publico jovem',
    status: 'concluido',
  },
  {
    name: 'Site de Grupos',
    techs: ['Next Js', 'NestJs', 'Postgres', 'Vercel'],
    img: whats,
    link: 'https://whatsapp-group-repo.vercel.app',
    githubLink: 'https://github.com/gabebonham/what-repo-back',
    description: 'Repositório para grupos.',
    status: 'desenvolvimento',
  },
  {
    name: 'Site de Eventos',
    link: 'https://gabebonham.github.io/events-website/',
    githubLink: 'https://github.com/gabebonham/events-website',
    techs: ['HTML', 'CSS'],
    img: luma,
    description: 'Um Remake de site de eventos.',
    status: 'concluido',
  },
  {
    name: 'Blog Site',
    link: 'https://frontend-chi-eight-29.vercel.app/',
    githubLink: 'https://github.com/gabebonham/frontend',
    techs: ['NextJs', 'Express', 'Vercel'],
    img: blog,
    description:
      'Um teste. O site foi feito em 3 horas como desafio para provar minhas skills para trabalhar em uma empresa.',
    status: 'concluido',
  },
  {
    name: 'App de Chat',
    link: 'https://chat-app-eight-virid.vercel.app/login',
    githubLink: 'https://github.com/gabebonham/chat-app',
    techs: ['Next Js', 'Spring Boot', 'Vercel'],
    img: chat,
    description:
      'Um treinamento pessoal. A ideia e simular um aplicativo similar ao Whatsapp.',
    status: 'desenvolvimento',
  },
    {
    name: 'Biscuit Bijux',
    link: 'https://biscuit-bijux.vercel.app/home',
    techs: ['Next Js', 'Vercel'],
    img: bijux,
    description:
      'Vitrine de bijuterias.',
    status: 'desenvolvimento',
  },
]
