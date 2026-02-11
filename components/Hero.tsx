import HeroParticles from './HeroParticles';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-[#080810] py-12 lg:py-20">
      {/* Ambient glow orbs - pure CSS, no JS needed */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(193,139,252,0.12),transparent_70%)]" />
        <div className="absolute bottom-[-5%] right-[10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(188,57,49,0.1),transparent_70%)]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,212,255,0.05),transparent_60%)]" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(193,139,252,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(193,139,252,0.04)_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Vibrant canvas particle system */}
      <HeroParticles />

      {/* Animated content */}
      <HeroContent />

      {/* Bottom gradient transition to white sections below */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20" />
    </section>
  );
}
