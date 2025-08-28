// components/MissionStatement.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const MissionStatement: FC = () => (
  <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
    {/* Animated Aurora Background */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(22,163,74,0.15),_transparent_35%)] animate-aurora" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center"
    >
      <blockquote className="text-4xl md:text-5xl font-bold max-w-4xl leading-tight md:leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        “To empower every business with the digital tools and expert guidance needed to not just compete, but to thrive in a modern world.”
      </blockquote>
      <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl">
        At RayTech, we break down barriers to digital transformation. We believe every business deserves access to powerful, easy-to-use technology and expert support, tailored to their unique needs and goals.
      </p>
    </motion.div>
  </section>
);

export default MissionStatement;