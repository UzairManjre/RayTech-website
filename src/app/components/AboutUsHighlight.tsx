// components/AboutUsHighlight.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { FC, ReactNode } from 'react';

const AboutUsHighlight: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section ref={containerRef} className="bg-black py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-center">
          {/* Left Card: Content */}
          <motion.div style={{ y: y1 }} className="lg:col-span-6 z-10">
            <LayoutCard>
              <p className="text-sm font-semibold text-green-400 uppercase mb-2 tracking-widest">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Simplifying Tech for Your Business
              </h2>
              <p className="text-slate-400 mt-4 text-lg">
                We help businesses modernize and automate with tailored digital solutions. Our mission is to make technology accessible, efficient, and easy to manage for every client.
              </p>
              <div className="flex items-center mt-6 border-t border-slate-800 pt-6">
                <Image
                  src="/Images/Home/placeholder.avif"
                  alt="Uzair Manjre"
                  width={48}
                  height={48}
                  className="rounded-full object-cover mr-4 border-2 border-slate-700"
                />
                <div>
                  <div className="font-semibold text-white">Uzair Manjre</div>
                  <div className="text-sm text-slate-500">Founder & Lead Developer</div>
                </div>
              </div>
              <Link
                href="/about"
                className="group mt-8 inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </LayoutCard>
          </motion.div>

          {/* Right Card: Image */}
          <motion.div style={{ y: y2 }} className="lg:col-span-4">
            <LayoutCard className="p-4">
              <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
                <Image
                  src="/Images/Home/Grp.avif"
                  alt="About RayTech Team"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </LayoutCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Reusable Layout Card Sub-Component ---
const LayoutCard: FC<{ children: ReactNode; className?: string }> = ({ children, className = 'p-8' }) => (
  <div className={`rounded-2xl bg-slate-900/80 border border-slate-800 ${className}`}>
    {children}
  </div>
);

export default AboutUsHighlight;