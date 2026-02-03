
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
      className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 to-white overflow-hidden py-20 lg:py-32"
    >
      {/* Background Decorative Elements */}
      <motion.div 
        style={{ x: moveXReverse, y: moveYReverse }}
        className="absolute top-20 right-[10%] w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none"
      />
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="absolute bottom-20 left-[5%] w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none"
      />

      {/* Floating Particles */}
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
              className="flex flex-wrap items-center gap-6 mb-10"
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
                  className="flex items-center gap-2 text-gray-700 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100 shadow-sm"
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-sm">{badge}</span>
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
                className="btn btn-primary text-lg shadow-lg shadow-blue-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: 078 2549 7077
              </motion.a>
              
              <motion.a 
                href="mailto:hello@electricjames.com"
                className="px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:border-primary hover:text-primary transition-colors bg-white/50 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email Us
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
              className="absolute -right-4 bottom-1/4 bg-blue-600 text-white p-4 rounded-2xl shadow-xl z-20"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="text-center">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-xs opacity-90">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
