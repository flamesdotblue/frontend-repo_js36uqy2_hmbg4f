import { motion } from 'framer-motion';
import { Sparkles, Cpu } from 'lucide-react';

const COLORS = {
  base: '#50207A',
  pink: '#FF48B9',
  green: '#12CE6A',
  light: '#F9C8E8',
};

function ShinyText({ children }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10 bg-clip-text text-transparent"
        style={{ backgroundImage: `linear-gradient(90deg, ${COLORS.pink}, ${COLORS.green})` }}>
        {children}
      </span>
      <span className="absolute inset-0 blur-md opacity-30"
        style={{ background: `linear-gradient(90deg, ${COLORS.pink}, ${COLORS.green})` }} />
    </span>
  );
}

export default function AIPredictorTeaser() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl p-6 sm:p-8"
          style={{
            background: 'linear-gradient(135deg, rgba(255,72,185,0.15), rgba(18,206,106,0.15))',
            border: '1px solid rgba(255,255,255,0.14)'
          }}
        >
          <div className="absolute -top-20 -right-16 h-64 w-64 rounded-full blur-3xl opacity-40" style={{ background: COLORS.pink }} />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full blur-3xl opacity-30" style={{ background: COLORS.green }} />

          <div className="relative">
            <div className="flex items-center gap-2">
              <Cpu size={22} style={{ color: COLORS.green }} />
              <p className="text-sm font-semibold" style={{ color: COLORS.light }}>AI Predictor</p>
            </div>
            <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              Our AI predicts your music’s future streams & ROI
            </h3>
            <p className="mt-2 text-[#F5E6FF] max-w-2xl">
              Get smart insights before you invest. See projected plays, fan growth and potential royalty share returns.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[{label: 'Projected 30-day streams', value: '128,400'}, {label: 'Fan conversion rate', value: '7.6%'}, {label: 'Estimated 12m ROI', value: '+23%'}].map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="rounded-2xl p-4 backdrop-blur"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <p className="text-xs" style={{ color: COLORS.light }}>{m.label}</p>
                  <p className="mt-1 text-2xl font-extrabold text-white">
                    <ShinyText>{m.value}</ShinyText>
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'mirror' }}
              className="mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: COLORS.pink }}
            >
              <Sparkles size={14} /> Beta preview — magic loading
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
