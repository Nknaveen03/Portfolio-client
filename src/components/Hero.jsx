import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid"
    >
      {/* Background blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F97316, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-brand-orange/40"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left — Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animated-border">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
              <span className="text-green-400 text-sm font-medium">Available for Work</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">Naveenkumar</span>
            </h1>

            <div className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 h-12">
              I'm a{' '}
              <TypeAnimation
                sequence={[
                  'MERN Stack Developer',
                  2000,
                  'Front-End Developer',
                  2000,
                  'React.js Developer',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-brand-orange font-bold"
              />
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              A passionate fresher developer building modern web applications
              with the MERN stack. Turning ideas into clean, performant digital
              experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn-primary cursor-pointer flex items-center justify-center gap-2"
              >
                View My Work
                <HiArrowDown />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="btn-outline flex items-center justify-center gap-2"
              >
                <FaDownload size={14} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-gray-500 text-sm">Find me on</span>
              <div className="flex gap-3">
                {[
                  { icon: FaGithub, href: 'https://github.com/naveenkumar-s', label: 'GitHub' },
                  { icon: FaLinkedin, href: 'https://linkedin.com/in/naveenkumar-s', label: 'LinkedIn' },
                  { icon: FaTwitter, href: 'https://twitter.com/naveenkumar_s', label: 'Twitter' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 glass-card flex items-center justify-center text-gray-400 hover:text-brand-orange hover:border-brand-orange/30 transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Avatar Card */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative animate-float">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full opacity-40 blur-2xl orange-glow" />

              {/* Profile circle */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1"
                style={{
                  background: 'linear-gradient(135deg, #F97316, #3B82F6)',
                }}>
                <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center overflow-hidden">
                  {/* Avatar placeholder with initials */}
                  <div className="w-full h-full rounded-full flex flex-col items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(59,130,246,0.15))',
                    }}>
                    <span className="text-7xl font-black gradient-text">NK</span>
                    <span className="text-gray-400 text-sm mt-1">Developer</span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-4 glass-card px-3 py-2 flex items-center gap-2 animated-border">
                <span className="text-xl">⚛️</span>
                <span className="text-white text-xs font-semibold">React Dev</span>
              </div>
              <div className="absolute -bottom-2 -left-4 glass-card px-3 py-2 flex items-center gap-2 animated-border">
                <span className="text-xl">🚀</span>
                <span className="text-white text-xs font-semibold">MERN Stack</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-500 text-xs">Scroll down</span>
          <HiArrowDown className="text-brand-orange" size={20} />
        </div>
      </div>
    </section>
  )
}

export default Hero
