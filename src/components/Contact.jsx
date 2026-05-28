import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const API_URL = import.meta.env.VITE_API_URL || ''

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'naveenkumar@example.com',
    href: 'mailto:naveenkumar@example.com',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Tamil Nadu, India',
    href: null,
  },
]

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/naveenkumar-s', label: 'GitHub', color: '#ffffff' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/naveenkumar-s', label: 'LinkedIn', color: '#0A66C2' },
  { icon: FaTwitter, href: 'https://twitter.com/naveenkumar_s', label: 'Twitter', color: '#1DA1F2' },
]

const initialForm = { name: '', email: '', subject: '', message: '' }

const Contact = () => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim() || form.name.trim().length < 2)
      newErrors.name = 'Name must be at least 2 characters'
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = 'Please enter a valid email'
    if (!form.subject.trim() || form.subject.trim().length < 3)
      newErrors.subject = 'Subject must be at least 3 characters'
    if (!form.message.trim() || form.message.trim().length < 10)
      newErrors.message = 'Message must be at least 10 characters'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setLoading(true)
    try {
      const { data } = await axios.post(`${API_URL}/api/contact`, form)
      if (data.success) {
        toast.success(data.message || "Message sent! I'll get back to you soon.")
        setForm(initialForm)
        setErrors({})
      }
    } catch (err) {
      const serverErrors = err.response?.data?.errors
      if (serverErrors) {
        const fieldErrors = {}
        serverErrors.forEach(({ field, message }) => {
          fieldErrors[field] = message
        })
        setErrors(fieldErrors)
      } else {
        toast.error(err.response?.data?.message || 'Something went wrong. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl bg-dark-700 border text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
      errors[field]
        ? 'border-red-500/50 focus:ring-red-500/30 focus:border-red-500'
        : 'border-white/8 focus:ring-brand-orange/30 focus:border-brand-orange/50'
    }`

  return (
    <section id="contact" className="section-padding bg-dark-800 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F97316, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have a project in mind or want to hire me? Drop a message and I'll respond ASAP!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Left — Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Let's Talk */}
            <div className="glass-card p-6">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4">
                <HiMail className="text-brand-orange" size={22} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Let's Talk!</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I'm actively looking for opportunities as a fresher MERN Stack Developer. Whether
                you have a job opening, a project to collaborate on, or just want to say hi —
                my inbox is always open!
              </p>
            </div>

            {/* Contact Details */}
            <div className="glass-card p-6 space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-brand-orange" size={16} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">{label}</p>
                    {href ? (
                      <a href={href} className="text-white text-sm hover:text-brand-orange transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-white text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-card p-6">
              <p className="text-gray-400 text-sm mb-4">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 glass-card flex items-center justify-center text-gray-400 hover:scale-110 transition-all duration-300"
                    style={{ '--hover-color': color }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = color
                      e.currentTarget.style.borderColor = `${color}40`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = ''
                      e.currentTarget.style.borderColor = ''
                    }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5" noValidate>
              <h3 className="text-white font-bold text-xl mb-6">Send Me a Message</h3>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Your Name <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass('name')}
                    disabled={loading}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Email Address <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass('email')}
                    disabled={loading}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Subject <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Project Collaboration"
                  className={inputClass('subject')}
                  disabled={loading}
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Message <span className="text-brand-orange">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputClass('message')} resize-none`}
                  disabled={loading}
                />
                <div className="flex justify-between mt-1">
                  {errors.message ? (
                    <p className="text-red-400 text-xs">{errors.message}</p>
                  ) : (
                    <span />
                  )}
                  <span className="text-gray-600 text-xs">{form.message.length}/2000</span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                      <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={14} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
