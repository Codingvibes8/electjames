
"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

export default function Hero() {
  const ref = useRef(null);
  
  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  // Smooth spring animation for mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const moveX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-25, 25]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-25, 25]), springConfig);
  
  // Opposite movement for background elements
  const moveXReverse = useSpring(useTransform(mouseX, [-0.5, 0.5], [15, -15]), springConfig);
  const moveYReverse = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);

  // Particle configuration
  const particleCount = 25;
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 2, // 2-10px
    x: Math.random() * 100, // 0-100%
    y: Math.random() * 100, // 0-100%
    duration: Math.random() * 20 + 10, // 10-30s
    delay: Math.random() * 5,
    opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
  }));

  return (
    <section 
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex items-center bg-white overflow-hidden py-40 lg:py-32"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
      </div>

      <motion.div 
        style={{ x: moveXReverse, y: moveYReverse }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl opacity-30 pointer-events-none mix-blend-multiply"
      />
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-50/50 rounded-full blur-3xl opacity-30 pointer-events-none mix-blend-multiply"
      />

      {/* Floating Particles - Made Subtle */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-blue-400 rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            x: useTransform(mouseX, [-0.5, 0.5], [p.size * 5, p.size * -5]),
            y: useTransform(mouseY, [-0.5, 0.5], [p.size * 5, p.size * -5]),
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl lg:text-7xl font-bold mb-6 text-gradient tracking-tight"
              style={{ fontFamily: 'var(--font-poppins)' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Expert Electrical Services in 
              <br />
              <motion.span 
                className="text-primary inline-block"
                animate={{ rotate: [0, 1, 0, -1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                North West London
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Good honest reliable electrician based in Cricklewood, NW2. Fully qualified (18th edition) and Part P certified. 
              Trusted by homeowners and businesses.
            </motion.p>
            
            {/* Trust Badges */}
            <motion.div 
              className="flex flex-wrap items-center gap-4 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                "NAPIT Approved", 
                "Which? Trusted Trader", 
                "Part P Certified"
              ].map((badge, i) => (
                <motion.div 
                  key={badge}
                  className="flex items-center gap-2 text-slate-700 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm hover:border-primary/20 transition-colors"
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-semibold text-sm tracking-wide">{badge}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a 
                href="tel:07825447057" 
                className="btn btn-primary text-lg shadow-xl shadow-red-600/20 px-8 py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col items-start leading-none">
                   <span className="text-xs opacity-90 font-medium mb-0.5">Available 24/7</span>
                   <span className="font-bold">Call 078 2549 7077</span> 
                </div>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
              
              <motion.a 
                href="mailto:hello@electricjames.com"
                className="px-8 py-4 rounded-full border border-slate-200 text-slate-700 font-semibold hover:border-slate-800 hover:text-slate-900 transition-colors bg-white hover:bg-slate-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Quote
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="relative h-[400px] lg:h-[600px] w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            {/* Main Image Container */}
            <motion.div
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{ x: moveX, y: moveY }}
            >
              <Image
                src="/images/hero_electrician_1769615393352.png"
                alt="Professional electrician working on electrical panel"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              
              {/* Glossy Overlay Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating Badge 1 */}
            <motion.div
              className="absolute -left-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl z-20 max-w-[180px]"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-bold text-gray-800 text-sm">Available Now</span>
              </div>
              <p className="text-xs text-gray-500">Ready for emergency callouts in NW2</p>
            </motion.div>
            
            {/* Floating Badge 2 */}
            <motion.div
              className="absolute -right-8 bottom-1/4 bg-slate-900 text-white p-6 rounded-2xl shadow-2xl z-20 border border-slate-700"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="text-center">
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-white to-slate-400">15+</p>
                <p className="text-xs uppercase tracking-widest text-slate-400 mt-1 font-semibold">Years Exp.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
