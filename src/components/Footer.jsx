import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaCode } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'resume', label: 'Resume' },
  { to: 'contact', label: 'Contact' },
]

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Nknaveen03', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/naveen-mern-dev', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/naveenkumar_s', label: 'Twitter' },
  { icon: HiMail, href: 'mailto:naveennk6384@gmail.com', label: 'Email' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-950 border-t border-white/5 relative overflow-hidden">
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #F97316, #3B82F6, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-10 items-start">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-orange rounded-lg flex items-center justify-center">
                <FaCode className="text-white text-sm" />
              </div>
              <span className="text-white font-bold text-lg">
                NK<span className="text-brand-orange">.</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-xs">
              Fresher MERN Stack & Front-End Developer passionate about building
              modern, performant, and accessible web applications.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 glass-card flex items-center justify-center text-gray-400 hover:text-brand-orange hover:border-brand-orange/30 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-500 hover:text-brand-orange text-sm cursor-pointer transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-brand-orange transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <p className="text-gray-500 text-sm">📧 naveennk6384@gmail.com</p>
              <p className="text-gray-500 text-sm">📍 Dharmapuri, Tamil Nadu, India</p>
              <p className="text-gray-500 text-sm">💼 Open to full-time & freelance</p>
            </div>
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-medium">Available for Work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © {year} Naveenkumar S. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1.5">
            Built with{' '}
            <FaHeart className="text-brand-orange" size={11} />
            {' '}using React & Node.js
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
