// components/FinalCTA.tsx
'use client';

import React, { useRef, type FC } from 'react'; // <-- FIX IS HERE
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTA: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative bg-slate-950 text-white py-24 md:py-32 overflow-hidden"
    >
      {/* Spotlight Effect */}
      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(500px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(22,163,74,0.15),transparent_40%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="container relative z-10 mx-auto flex flex-col items-center text-center px-6"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 max-w-3xl">
          Ready to Modernize Your Business?
        </h2>
        <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
          Let's build the future of your business together. Schedule a free consultation to see how our solutions can drive your success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            Book Free Consultation
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
          >
            View Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;