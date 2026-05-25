import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    let raf = 0
    let tx = window.innerWidth / 2
    let ty = window.innerHeight / 2
    let x = tx
    let y = ty
    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
    }
    const tick = () => {
      x += (tx - x) * 0.12
      y += (ty - y) * 0.12
      node.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])
  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
