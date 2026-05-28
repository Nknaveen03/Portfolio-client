import { FaDownload, FaEye, FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import { HiCheckCircle } from 'react-icons/hi'

const experiences = [
  {
    type: 'education',
    title: 'BCA (Bachelor of Computer Applications)',
    org: 'Government arts and science college, Kanyakumari',
    period: '2022 – 2025',
    desc: 'Studied Computer Applications / Information Technology with a focus on software development, data structures, algorithms, and web technologies.',
  },
  {
    type: 'project',
    title: 'MERN Stack Projects',
    org: 'Error makers clever,Self-Learning & Practice',
    period: 'Present',
    desc: 'Built multiple full-stack applications using MongoDB, Express.js, React.js, and Node.js. Deployed on platforms like Vercel and Render.',
  },
  {
    type: 'learning',
    title: 'Frontend Specialization',
    org: 'Online Courses & Bootcamps',
    period: 'Present',
    desc: 'Completed courses on React, JavaScript (ES6+), CSS animations, responsive design, and modern development tools like Vite and Tailwind CSS.',
  },
]

const certifications = [
  'React.js — The Complete Guide',
  'Node.js & Express.js Bootcamp',
  'MongoDB Basics (M001)',
  'JavaScript Algorithms & Data Structures',
  'Responsive Web Design — freeCodeCamp',
  'Git & GitHub — Version Control',
]

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-dark-900 relative overflow-hidden">
      <div
        className="absolute top-1/4 right-0 w-80 h-80 opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-medium mb-4">
            My Resume
          </span>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My journey, learning path, and professional milestones
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left — Timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {experiences.map(({ type, title, org, period, desc }, i) => (
                <div key={i} className="flex gap-5">
                  {/* Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center flex-shrink-0">
                      {type === 'education' ? (
                        <FaGraduationCap className="text-brand-orange" size={16} />
                      ) : (
                        <FaBriefcase className="text-brand-orange" size={16} />
                      )}
                    </div>
                    {i < experiences.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-brand-orange/30 to-transparent mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="glass-card p-6 flex-1 mb-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-white font-bold text-lg">{title}</h3>
                        <p className="text-brand-orange text-sm font-medium">{org}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-medium whitespace-nowrap">
                        {period}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Sidebar */}
          <div className="space-y-6">

            {/* Download CTA */}
            <div
              className="glass-card p-6 text-center"
              style={{ border: '1px solid rgba(249,115,22,0.2)' }}
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                <FaDownload className="text-brand-orange" size={24} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Download Resume</h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                Get a copy of my full resume with all the details of my skills and projects.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="/resume.pdf"
                  download="Naveenkumar_S_Resume.pdf"
                  className="btn-primary flex items-center justify-center gap-2 text-sm"
                >
                  <FaDownload size={13} />
                  Download PDF
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center justify-center gap-2 text-sm"
                >
                  <FaEye size={13} />
                  View Online
                </a>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card p-6">
              <h3 className="text-white font-bold mb-4">Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <HiCheckCircle className="text-brand-orange flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-400 text-sm leading-relaxed">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
