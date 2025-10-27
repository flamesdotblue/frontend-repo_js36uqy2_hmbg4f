import { motion } from 'framer-motion';

const COLORS = {
  base: '#50207A',
  pink: '#FF48B9',
  green: '#12CE6A',
  light: '#F9C8E8',
};

const mockCampaigns = [
  {
    id: 1,
    title: 'Sugar Rush',
    artist: 'Luna Pop',
    genre: 'Electro Pop',
    funded: 72,
    img: 'https://images.unsplash.com/photo-1521335629791-ce4aec67ddaf?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Neon Alley',
    artist: 'XO Ghost',
    genre: 'Synthwave',
    funded: 54,
    img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Bubblefunk',
    artist: 'Fizzy J',
    genre: 'Funk',
    funded: 88,
    img: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Starlight Drip',
    artist: 'Nova Blu',
    genre: 'Indie',
    funded: 39,
    img: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=1200&auto=format&fit=crop',
  },
];

function CampaignCard({ c, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group rounded-2xl overflow-hidden relative"
      style={{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.12)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
      }}
    >
      <div className="relative h-44 w-full overflow-hidden">
        <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#50207A] via-transparent to-transparent" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-bold text-lg">{c.title}</h3>
          <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: 'rgba(255,72,185,0.15)', color: COLORS.pink }}>
            {c.genre}
          </span>
        </div>
        <p className="text-[#F5E6FF] text-sm mt-1">by {c.artist}</p>

        <div className="mt-4">
          <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: `${c.funded}%`, background: `linear-gradient(90deg, ${COLORS.pink}, ${COLORS.green})` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-white font-semibold">{c.funded}% funded</span>
            <span className="text-[#F9C8E8]">Goal: $50k</span>
          </div>
        </div>

        <button
          className="mt-4 w-full rounded-xl px-4 py-2 font-semibold transition-transform hover:scale-[1.02]"
          style={{ backgroundColor: COLORS.green, color: '#0A0A0A' }}
        >
          View Campaign
        </button>
      </div>
      {/* Glass highlight */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/3 left-0 right-0 h-1/2 opacity-20" style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0))',
          transform: 'skewY(-6deg)'
        }} />
      </div>
    </motion.div>
  );
}

export default function TrendingCampaigns() {
  return (
    <section id="trending" className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold" style={{ color: '#FFFFFF' }}>
              Trending Campaigns
            </h2>
            <p className="text-[#F9C8E8] mt-1">Hot drops fans are backing right now</p>
          </div>
          <a href="#" className="text-sm font-semibold hover:opacity-90" style={{ color: COLORS.pink }}>
            View all
          </a>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockCampaigns.map((c, i) => (
            <CampaignCard c={c} index={i} key={c.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
