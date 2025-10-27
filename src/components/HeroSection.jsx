import { motion } from 'framer-motion';
import { Music, Sparkles } from 'lucide-react';

const COLORS = {
  base: '#50207A',
  pink: '#FF48B9',
  green: '#12CE6A',
  light: '#F9C8E8',
};

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, 2, -2, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background candy blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-24 h-72 w-72 rounded-full blur-3xl opacity-50"
          style={{ background: COLORS.pink }}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-16 -right-16 h-80 w-80 rounded-full blur-3xl opacity-40"
          style={{ background: COLORS.green }}
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 h-56 w-56 rounded-full blur-3xl opacity-30"
          style={{ background: COLORS.light }}
          animate={{ x: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-28 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
            style={{ background: 'rgba(249, 200, 232, 0.15)', color: COLORS.light, border: '1px solid rgba(255,72,185,0.4)' }}
          >
            <Sparkles size={16} className="text-pink-300" />
            Candy-fintech for music lovers
          </span>

          <h1
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight"
            style={{ color: '#FFFFFF' }}
          >
            <span className="block">Invest in Music.</span>
            <span
              className="relative inline-block px-2"
              style={{
                WebkitTextStroke: '0px transparent',
                backgroundImage: `linear-gradient(90deg, ${COLORS.pink}, ${COLORS.green})`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Own the Vibe.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg" style={{ color: '#F5E6FF' }}>
            Fund your favorite artists and earn from their success. Royalty shares, real upside, real fun.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#trending"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold shadow-lg hover:shadow-pink-500/30 transition-all"
              style={{ backgroundColor: COLORS.green, color: '#0A0A0A' }}
            >
              <Music className="mr-2" size={18} /> Start Investing
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold border"
              style={{ borderColor: COLORS.pink, color: COLORS.pink, background: 'rgba(255,72,185,0.08)' }}
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Floating notes */}
        <div className="pointer-events-none" aria-hidden>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              variants={floatVariants}
              animate="animate"
              className="absolute"
              style={{
                left: `${10 + i * 14}%`,
                top: `${30 + (i % 3) * 12}%`,
              }}
            >
              <Music
                size={18 + (i % 3) * 6}
                style={{ color: i % 2 ? COLORS.pink : COLORS.green, opacity: 0.7 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
