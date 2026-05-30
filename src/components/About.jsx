import { FaCode, FaLaptopCode, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

const stats = [
  { label: 'Projects Built', value: '10+' },
  { label: 'Technologies', value: '8+' },
  { label: 'GitHub Repos', value: '15+' },
  { label: 'Cups of Coffee', value: '∞' },
]

const highlights = [
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'Writing maintainable, readable, and efficient code following best practices.',
  },
  {
    icon: FaLaptopCode,
    title: 'Full-Stack',
    description: 'Building end-to-end applications with React, Node.js, Express, and MongoDB.',
  },
  {
    icon: HiSparkles,
    title: 'UI Focused',
    description: 'Crafting pixel-perfect, responsive interfaces with smooth user experiences.',
  },
]

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-800 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            Passionate developer eager to create impactful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Personal Info */}
          <div>
            <div className="glass-card p-8 mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Hello! I'm <span className="text-brand-orange">Naveenkumar S</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm a fresher MERN Stack and Front-End Developer with a strong passion for
                building modern, user-centric web applications. My journey in web development
                started with curiosity about how websites work, and it quickly evolved into
                a deep passion for crafting exceptional digital experiences.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I specialize in the MERN stack — MongoDB, Express.js, React.js, and Node.js —
                and I'm constantly learning and adapting to new technologies. I believe in
                writing clean, maintainable code and building products that make a difference.
              </p>
            </div>

            {/* Personal Details */}
            <div className="glass-card p-6">
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">
                Quick Info
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: FaGraduationCap, label: 'Education', value: 'BCA' },
                  { icon: FaMapMarkerAlt, label: 'Location', value: 'Dharmapuri,Tamil Nadu, India' },
                  { icon: FaLaptopCode, label: 'Role', value: 'MERN Developer' },
                  { icon: FaCode, label: 'Status', value: 'Open to Work' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-white/3 hover:bg-white/5 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-brand-orange" size={14} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">{label}</p>
                      <p className="text-white text-sm font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Stats + Highlights */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="glass-card-hover p-6 text-center"
                >
                  <span className="block text-3xl font-black gradient-text mb-1">{value}</span>
                  <span className="text-gray-400 text-sm">{label}</span>
                </div>
              ))}
            </div>

            {/* Highlight Cards */}
            <div className="space-y-4">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="glass-card-hover p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-brand-orange" size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
