import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaDatabase
} from 'react-icons/fa'
import { SiExpress, SiMongodb, SiTailwindcss, SiGit, SiVite } from 'react-icons/si'

const skillCategories = [
  {
    category: 'Frontend',
    color: '#F97316',
    skills: [
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 90 },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 85 },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 82 },
      { name: 'React.js', icon: FaReact, color: '#61DAFB', level: 80 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 78 },
    ],
  },
  {
    category: 'Backend',
    color: '#3B82F6',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 75 },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff', level: 72 },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 70 },
    ],
  },
  {
    category: 'Tools & Others',
    color: '#A855F7',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032', level: 80 },
      { name: 'GitHub', icon: FaGithub, color: '#ffffff', level: 82 },
      { name: 'Vite', icon: SiVite, color: '#646CFF', level: 75 },
    ],
  },
]

const SkillBar = ({ name, level, color }) => (
  <div className="mb-3">
    <div className="flex justify-between items-center mb-1">
      <span className="text-gray-300 text-sm font-medium">{name}</span>
      <span className="text-gray-500 text-xs">{level}%</span>
    </div>
    <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000"
        style={{
          width: `${level}%`,
          background: `linear-gradient(90deg, ${color}, ${color}99)`,
        }}
      />
    </div>
  </div>
)

const SkillCard = ({ name, icon: Icon, color, level }) => (
  <div className="relative overflow-hidden glass-card-hover p-5 flex flex-col items-center gap-3 skill-shine">
    <div
      className="w-14 h-14 rounded-xl flex items-center justify-center"
      style={{ background: `${color}15`, border: `1px solid ${color}30` }}
    >
      <Icon size={28} color={color} />
    </div>
    <div className="text-center">
      <p className="text-white font-semibold text-sm mb-2">{name}</p>
      <div className="h-1 w-16 bg-dark-600 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${level}%`,
            background: color,
          }}
        />
      </div>
    </div>
  </div>
)

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-dark-900 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F97316, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-medium mb-4">
            My Skills
          </span>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build modern web applications
          </p>
        </div>

        {/* Skill Grid by category */}
        <div className="space-y-12">
          {skillCategories.map(({ category, color, skills }) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 rounded-full" style={{ background: color }} />
                <h3 className="text-white font-bold text-xl">{category}</h3>
                <div className="flex-1 h-px bg-white/5" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars - compact section */}
        <div className="mt-16 glass-card p-8">
          <h3 className="text-white font-bold text-xl mb-8 flex items-center gap-3">
            <div className="w-2 h-6 rounded-full bg-brand-blue" />
            Proficiency Overview
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12">
            {skillCategories.flatMap((c) => c.skills).map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={skill.color === '#ffffff' ? '#F97316' : skill.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
