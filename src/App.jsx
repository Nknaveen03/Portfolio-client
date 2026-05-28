import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-900 font-poppins">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#1A1A24',
            color: '#e2e8f0',
            border: '1px solid rgba(249,115,22,0.3)',
            borderRadius: '12px',
            fontFamily: 'Poppins, sans-serif',
          },
          success: {
            iconTheme: { primary: '#F97316', secondary: '#0A0A0F' },
          },
          error: {
            iconTheme: { primary: '#ef4444', secondary: '#0A0A0F' },
          },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
