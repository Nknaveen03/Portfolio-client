import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Store',
    description:
      'A full-stack e-commerce application with product listing, cart management, user authentication, and payment integration using the MERN stack.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/naveenkumar-s/ecommerce-mern',
    live: '#',
    gradient: 'from-orange-500/20 to-red-500/20',
    accent: '#F97316',
    emoji: '🛒',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A productivity application to manage tasks with drag-and-drop kanban boards, deadlines, priority levels, and real-time collaboration features.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/naveenkumar-s/task-manager',
    live: '#',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    accent: '#3B82F6',
    emoji: '✅',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A responsive weather application that fetches real-time data from OpenWeather API, displaying forecasts, humidity, wind speed, and interactive charts.',
    tech: ['React', 'Axios', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com/Nknaveen03/Weather-app.git',
    live: 'https://weather-app-r8e9.vercel.app/',
    gradient: 'from-purple-500/20 to-violet-500/20',
    accent: '#A855F7',
    emoji: '🌤️',
    featured: false,
  },
  {
    id: 4,
    title: 'Blog Platform',
    description:
      'A full-featured blogging platform with markdown support, categories, tags, comments, and an admin dashboard for content management.',
    tech: ['React', 'Express', 'MongoDB', 'JWT', 'Markdown'],
    github: 'https://github.com/naveenkumar-s/blog-platform',
    live: '#',
    gradient: 'from-green-500/20 to-emerald-500/20',
    accent: '#22C55E',
    emoji: '📝',
    featured: false,
  },
  {
    id: 5,
    title: 'Chat Application',
    description:
      'Real-time chat application with private messaging, group rooms, online status, and emoji reactions built with Socket.io.',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    github: 'https://github.com/naveenkumar-s/chat-app',
    live: '#',
    gradient: 'from-pink-500/20 to-rose-500/20',
    accent: '#EC4899',
    emoji: '💬',
    featured: false,
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description:
      'This very portfolio — built with React, Vite, Tailwind CSS, and Node.js/Express backend with MongoDB to handle contact form submissions.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    github: 'https://github.com/naveenkumar-s/portfolio',
    live: '#',
    gradient: 'from-yellow-500/20 to-orange-500/20',
    accent: '#EAB308',
    emoji: '🚀',
    featured: false,
  },
]

const ProjectCard = ({ project }) => {
  const { title, description, tech, github, live, gradient, accent, emoji, featured } = project

  return (
    <div
      className={`relative glass-card overflow-hidden group transition-all duration-300 hover:-translate-y-2 ${
        featured ? 'ring-1 ring-brand-orange/20' : ''
      }`}
      style={{
        '--accent': accent,
      }}
    >
      {/* Card top gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/30 text-brand-orange text-xs font-medium z-10">
          Featured
        </div>
      )}

      <div className="relative p-6 z-10">
        {/* Emoji icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
          style={{ background: `${accent}15`, border: `1px solid ${accent}25` }}
        >
          {emoji}
        </div>

        <h3 className="text-white font-bold text-xl mb-3 group-hover:text-brand-orange-light transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg text-xs font-medium"
              style={{
                background: `${accent}12`,
                border: `1px solid ${accent}25`,
                color: accent,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-sm font-medium transition-all duration-200 border border-white/5 hover:border-white/15"
          >
            <FaGithub size={14} />
            Code
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              background: `${accent}15`,
              border: `1px solid ${accent}30`,
              color: accent,
            }}
          >
            <FaExternalLinkAlt size={12} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-dark-800 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-80 h-80 opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F97316, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A collection of projects I've built to sharpen my skills and solve real problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/Nknaveen03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline"
          >
            <FaGithub size={18} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
