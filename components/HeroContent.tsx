"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Phone, Zap, Shield, Award } from 'lucide-react';

const LOCATIONS = ["North West London", "Cricklewood NW2", "Your Neighbourhood"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const BADGES = [
  { label: "NAPIT Approved", Icon: Shield },
  { label: "Which? Trusted", Icon: Award },
  { label: "Part P Certified", Icon: Zap },
];

export default function HeroContent() {
  const [locIndex, setLocIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setLocIndex(i => (i + 1) % LOCATIONS.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="container mx-auto relative z-10">
      <motion.div
        className="grid lg:grid-cols-2 gap-12 items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Left Column - Content */}
        <div>
          {/* Top badge */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4 text-yellow-400" />
              NAPIT Approved &amp; Part P Certified
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1]"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            <span className="text-white">Expert Electrical</span>
            <br />
            <span className="text-white">Services in</span>
            <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={LOCATIONS[locIndex]}
                className="hero-gradient-text inline-block"
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {LOCATIONS[locIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg text-white/70 mb-8 leading-relaxed max-w-lg"
          >
            Good honest reliable electrician based in Cricklewood, NW2.
            Fully qualified (18th edition) and Part P certified.
            Trusted by homeowners and businesses.
          </motion.p>

          {/* Trust Badges */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-10">
            {BADGES.map(({ label, Icon }) => (
              <motion.div
                key={label}
                className="flex items-center gap-2 text-white/80 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-sm font-semibold"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderColor: 'rgba(193,139,252,0.5)',
                }}
              >
                <Icon className="w-4 h-4 text-[#C18BFC]" />
                {label}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <motion.a
              href="tel:07825497077"
              className="group relative bg-gradient-to-r from-[#BC3931] to-[#d44940] flex gap-2 items-center text-lg rounded-xl text-white shadow-2xl shadow-[#BC3931]/30 px-8 py-4 font-bold overflow-hidden"
              whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(188,57,49,0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#d44940] to-[#BC3931] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Phone className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Call 078 2549 7077</span>
            </motion.a>

            <motion.a
              href="mailto:hello@electricjames.com"
              className="px-8 py-4 rounded-xl bg-white text-slate-900 font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Request Quote
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column - Hero Image */}
        <motion.div
          variants={item}
          className="relative h-[400px] lg:h-[550px] w-full"
        >
          {/* Animated gradient border glow */}
          <div className="absolute inset-[-3px] rounded-3xl bg-gradient-to-br from-[#C18BFC] via-[#BC3931] to-[#00D4FF] opacity-50 blur-sm hero-border-glow" />

          <motion.div
            className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/electric1.jpg"
              alt="Professional electrician working on electrical panel"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>

          {/* Floating Badge - Available Now */}
          <motion.div
            className="absolute -left-6 top-1/4 bg-black/40 backdrop-blur-xl border border-white/15 p-4 rounded-2xl shadow-2xl z-20 max-w-[200px]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                <span className="font-bold text-white text-sm">Available Now</span>
              </div>
              <p className="text-white/60 text-xs">Ready for callouts from NW2</p>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-white/50 text-xs ml-1">15+ yrs</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Badge - Stats */}
          <motion.div
            className="absolute -right-4 bottom-1/4 bg-black/40 backdrop-blur-xl border border-white/15 p-4 rounded-2xl shadow-2xl z-20"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <div className="text-center">
              <span className="text-2xl font-extrabold hero-gradient-text">500+</span>
              <p className="text-white/60 text-xs mt-1">Jobs Completed</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
