import h4 from '@/public/images/h4.png'
import blog from '@/public/images/blog.png'
import arcade from '@/public/images/arcade.jpg'
import chat from '@/public/images/chat.png'
import luma from '@/public/images/luma.png'
import whats from '@/public/images/whats.png'
import ever from '@/public/images/evere4.png'
export const projects = [
  {
    name: 'H4 Investimentos',
    link: 'https://www.h4invest.com.br/home',
    techs: ['Next Js', 'DotNet', 'Meta Trader 5', 'Postgres', 'Docker', 'VPS'],
    img: h4,
    description:
      'Site para Operações Financeiras Automatizadas com Robôs de alta performance.',
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
    name: 'Arcade Lunar',
    techs: ['Flutter', 'Nest'],
    img: arcade,
    description: 'App de rede social para o publico jovem',
    status: 'concluido',
  },
  {
    name: 'Site de Grupos',
    techs: ['Next Js', 'NestJs', 'Postgres', 'Docker', 'Vercel'],
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
]
