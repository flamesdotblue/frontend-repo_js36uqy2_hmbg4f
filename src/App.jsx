import HeroSection from './components/HeroSection.jsx';
import TrendingCampaigns from './components/TrendingCampaigns.jsx';
import AIPredictorTeaser from './components/AIPredictorTeaser.jsx';
import HowItWorks from './components/HowItWorks.jsx';

const COLORS = {
  base: '#50207A',
  pink: '#FF48B9',
  green: '#12CE6A',
  light: '#F9C8E8',
};

function Footer() {
  return (
    <footer className="mt-8 border-t/20" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: COLORS.light }}>© {new Date().getFullYear()} FannyBags — Own the Vibe.</p>
        <nav className="flex items-center gap-4 text-sm font-semibold">
          <a href="#" className="hover:opacity-90" style={{ color: COLORS.pink }}>About</a>
          <a href="#" className="hover:opacity-90" style={{ color: COLORS.pink }}>Contact</a>
          <a href="#" className="hover:opacity-90" style={{ color: COLORS.pink }}>Socials</a>
        </nav>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.base }}>
      {/* playful dotted overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

      <HeroSection />
      <TrendingCampaigns />
      <AIPredictorTeaser />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
