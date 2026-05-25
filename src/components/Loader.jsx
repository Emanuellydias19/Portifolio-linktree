import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Loader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => setShow(false), 650)
    }
    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad)
      return () => window.removeEventListener('load', onLoad)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader-wrap"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-5"
          >
            <div className="loader-mark" />
            <motion.span
              className="font-mono text-[11px] tracking-[0.4em] text-white/40 uppercase"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              Initializing
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
