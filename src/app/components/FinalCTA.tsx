// components/FinalCTA.tsx
'use client';

import React, { type FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTA: FC = () => {
  return (
    <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
<div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">        {/* Shimmering Aurora */}
        <div className="absolute inset-[-200%] left-[calc(50%-200px)] sm:left-[calc(50%-400px)] top-[calc(50%-200px)] h-[400px] sm:h-[800px] w-[400px] sm:w-[800px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(22,163,74,0.4),rgba(255,255,255,0))] animate-aurora" />
      </div>
      
      {/* Meteors */}
      <Meteors number={20} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="container relative z-10 mx-auto flex flex-col items-center text-center px-6"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 max-w-3xl">
          Ready to Engineer Your Success?
        </h2>
        <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
          Let's build the future of your business together. Schedule a free consultation to see how our solutions can drive your success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-20 animate-shimmer" />
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

// --- Reusable Meteors Sub-Component ---
import { useMemo, useEffect, useState } from 'react';
const Meteors: FC<{ number?: number }> = ({ number = 20 }) => {
  const [mounted, setMounted] = useState(false);
  const meteorData = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: number }, () => ({
      left: `${Math.floor(Math.random() * 100)}vw`,
      animationDelay: `${Math.random() * 1 + 0.2}s`,
      animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number, mounted]);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return (
    <>
      {meteorData.map((data, i) => (
        <span
          key={`meteor-${i}`}
          className="animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
          style={{
            top: 0,
            left: data.left,
            animationDelay: data.animationDelay,
            animationDuration: data.animationDuration,
          }}
        />
      ))}
    </>
  );
};

export default FinalCTA;