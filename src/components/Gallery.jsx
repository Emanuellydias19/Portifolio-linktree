import { motion } from 'framer-motion'
import photo1 from '../assets/photo1.jpeg'
import photo2 from '../assets/photo2.jpeg'
import photo3 from '../assets/photo3.jpeg'
import photo4 from '../assets/photo4.jpeg'
import photo5 from '../assets/photo5.jpeg'
import photo6 from '../assets/photo6.jpeg'
import photo7 from '../assets/photo7.jpeg'
import photo8 from '../assets/photo8.jpeg'
import photo9 from '../assets/photo9.jpeg'
import photo10 from '../assets/photo10.jpeg'
import photo11 from '../assets/photo11.jpeg'
import photo12 from '../assets/photo12.jpeg'
import photo13 from '../assets/photo13.jpeg'
import photo14 from '../assets/photo14.jpeg'
import photo15 from '../assets/photo15.jpeg'

const ease = [0.16, 1, 0.3, 1]

const PHOTOS = [
  photo3,
  photo9,
  photo14,
  photo13,
  photo12,
  photo10,
  photo1,
  photo15,
  photo7,
  photo11,
  photo2,
  photo5,
  photo4,
  photo6,
  photo8,
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl mb-14"
        >
          <span className="section-kicker">04 / Team</span>
          <h2 className="mt-5 font-display font-semibold text-[34px] sm:text-[44px] leading-[1.05] tracking-tight text-white">
            Moments from the build.
          </h2>
          <p className="mt-4 text-[16px] text-white/80 leading-relaxed">
            Events, hackathons, and late nights with the OPEN team and the Solana community.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[140px] sm:auto-rows-[180px]">
          {PHOTOS.map((src, i) => {
            const span = [
              'col-span-2 row-span-2',
              'row-span-2',
              'row-span-1',
              'row-span-1',
              'row-span-1',
              'row-span-2',
              'col-span-2 row-span-2',
              'row-span-1',
              'row-span-1',
              'row-span-1',
              'row-span-1',
              'row-span-2',
              'col-span-2 row-span-1',
              'row-span-1',
              'row-span-1',
            ][i]
            return (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.04, ease }}
                className={`photo-tile ${span}`}
              >
                <img src={src} alt="" loading="lazy" />
              </motion.figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
