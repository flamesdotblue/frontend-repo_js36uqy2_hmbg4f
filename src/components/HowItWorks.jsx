import { motion } from 'framer-motion';
import { Rocket, Coins, HandCoins } from 'lucide-react';

const COLORS = {
  base: '#50207A',
  pink: '#FF48B9',
  green: '#12CE6A',
  light: '#F9C8E8',
};

const steps = [
  {
    title: 'Create Campaign',
    desc: 'Artists launch a song, set a goal, and offer royalty shares.',
    icon: Rocket,
    color: '#FF48B9',
  },
  {
    title: 'Invest',
    desc: 'Fans back the music they love with small, transparent stakes.',
    icon: Coins,
    color: '#12CE6A',
  },
  {
    title: 'Earn Royalties',
    desc: 'As the track streams, investors receive their share of payouts.',
    icon: HandCoins,
    color: '#F9C8E8',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white"
        >
          How It Works
        </motion.h3>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.05 }}
              className="rounded-2xl p-6 backdrop-blur-lg"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <div className="flex items-center gap-3">
                <s.icon size={24} style={{ color: s.color }} />
                <h4 className="text-white font-bold text-xl">{s.title}</h4>
              </div>
              <p className="mt-3 text-[#F5E6FF]">{s.desc}</p>

              <div className="mt-4 h-1 w-20 rounded-full" style={{ background: `linear-gradient(90deg, ${COLORS.pink}, ${COLORS.green})` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
