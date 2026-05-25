import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Orca } from './Icons.jsx'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'Team' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      {/* Top accent line + ambient aura */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-violet to-transparent shadow-[0_0_24px_rgba(153,69,255,0.6)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[720px] h-[180px] opacity-70"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(153,69,255,0.35), rgba(34,211,238,0.12) 35%, transparent 65%)',
          filter: 'blur(20px)',
        }}
      />

      <div
        className={`mx-auto max-w-6xl px-5 sm:px-8 transition-all duration-500 ${
          scrolled ? 'scale-[0.985]' : ''
        }`}
      >
        <div
          className={`relative flex items-center justify-between rounded-2xl pl-3 sm:pl-4 pr-2 sm:pr-3 py-2.5 transition-all duration-500 ${
            scrolled
              ? 'bg-[#0a0b12]/85 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_-15px_rgba(153,69,255,0.35),0_0_0_1px_rgba(153,69,255,0.15)]'
              : 'bg-[#0a0b12]/40 backdrop-blur-md border border-white/[0.06] shadow-[0_8px_30px_-10px_rgba(0,0,0,0.5)]'
          }`}
        >
          {/* subtle gradient highlight */}
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-t-2xl" />

          <a href="#top" className="flex items-center gap-2.5 group relative">
            <div className="relative">
              <Orca size={32} />
              <span className="absolute inset-0 blur-md opacity-60 group-hover:opacity-100 transition-opacity">
                <Orca size={32} />
              </span>
            </div>
            <span className="font-display font-semibold tracking-tight text-[15.5px] text-white">
              Emanuelly
              <span className="bg-gradient-to-r from-accent-violet to-accent-magenta bg-clip-text text-transparent">
                .
              </span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative px-3.5 py-2 text-[13px] font-medium text-white/75 hover:text-white transition-colors duration-200 group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 bg-gradient-to-r from-accent-electric via-accent-violet to-accent-magenta transition-all duration-300 group-hover:w-[70%]" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12.5px] font-semibold text-white bg-gradient-to-r from-accent-violet/25 to-accent-purple/25 border border-accent-violet/40 hover:from-accent-violet/40 hover:to-accent-purple/40 hover:border-accent-violet/70 hover:shadow-[0_6px_20px_-6px_rgba(153,69,255,0.7)] transition-all"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
              </span>
              Available
            </a>
            <button
              onClick={() => setOpen((s) => !s)}
              className="md:hidden p-2 text-white/80 hover:text-white"
              aria-label="Toggle menu"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                {open ? (
                  <path d="M6 6l12 12M6 18 18 6" />
                ) : (
                  <>
                    <path d="M3 7h18" />
                    <path d="M3 17h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass-strong rounded-2xl p-2 border border-accent-violet/20"
          >
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-accent-violet/10 rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
