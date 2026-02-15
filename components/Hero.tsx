
"use client";




import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { useRef} from 'react';
import { Badge, Phone } from 'lucide-react';


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
    size: Math.random() * 20 + 2, // 2-10px
    x: Math.random() * 100, // 0-100%
    y: Math.random() * 100, // 0-100%
    duration: Math.random() * 10 + 10, // 10-30s
    delay: Math.random() * 5,
    opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
  }));

  return (
    <section 
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex items-center bg-white overflow-hidden px-4 md:px-16 lg:px-32 "
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-80"></div>
      </div>

      <motion.div 
        style={{ x: moveXReverse, y: moveYReverse }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C18BFC]/20 rounded-full blur-3xl opacity-30 pointer-events-none mix-blend-multiply"
      />
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#BC3931]/10 rounded-full blur-3xl opacity-30 pointer-events-none mix-blend-multiply"
      />

      {/* Floating Particles - Made Subtle */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-[#C18BFC] rounded-full pointer-events-none"
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

      <div className="container mx-auto px-4 md:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold mb-6 text-gradient tracking-tight"
              style={{ fontFamily: 'var(--font-poppins)' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Expert Electrical Services in 
              <br />
              <motion.span 
                className="text-gradient inline-block"
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
              ].map((badge) => (
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
                className="bg-[#BC3931] flex gap-2 items-center justify-center text-lg rounded-lg text-white shadow-xl shadow-[#BC3931]/20 px-6 py-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5"/>
                 <span className="font-bold leading-none">Call 078 2549 7077</span> 
                
               
              </motion.a>
              
              <motion.a 
                href="mailto:hello@electricjamex.com"
                className="px-4 py-2 rounded-full border border-slate-200 text-slate-700 font-semibold hover:border-slate-800 hover:text-slate-900 transition-colors bg-white hover:bg-slate-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Quote
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="relative h-100 lg:h-150 w-full"
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
                src="/electric1.jpg"
                alt="Professional electrician working on electrical panel"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              
              
              
            </motion.div>

            {/* Floating Badge 1 */}
            <motion.div
              className="absolute -left-8 top-1/4 bg-yellow-100 p-4 rounded-2xl shadow-xl z-20 max-w-45"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-bold text-gray-800 text-sm">Available Now</span>
              </div>
              <div className="flex flex-col items-center justify-center">
             <span className="text-sm text-gray-700">Ready for callouts from NW2.</span>
            <span className="text-sm font-bold">15+ Years Exp.</span>
  </div>
              </div>
             
               
            </motion.div>
            
         
         
              
               
            
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}
