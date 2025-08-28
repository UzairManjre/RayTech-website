// components/Hero.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Code, ShoppingCart, Smartphone } from 'lucide-react';
import type { FC, ReactNode } from 'react';

const Hero: FC = () => {
  const headingLines = ["Your Partner In", "Digital Growth."];
  const headingContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };
  const lineVariants = {
    hidden: { y: "100%" },
    visible: { y: "0%", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center overflow-hidden py-24">
      {/* Animated Dot Pattern Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] animate-pan" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h1
          variants={headingContainerVariants}
          initial="hidden"
          animate="visible"
          className="font-display text-[clamp(2.5rem,1.5rem+5vw,5rem)] font-bold tracking-tighter"
        >
          {headingLines.map((line, index) => (
            <div key={index} className="overflow-hidden">
              <motion.div
                variants={lineVariants}
                className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 drop-shadow-lg"
              >
                {line}
              </motion.div>
            </div>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-4 text-lg text-slate-400 max-w-xl mx-auto"
        >
          We build modern technology solutions to automate, innovate, and scale your business for the digital age.
        </motion.p>
      </div>

      <BentoGrid />
    </section>
  );
};

// --- BENTO GRID SUB-COMPONENT ---
const BentoGrid: FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="relative mt-12 grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-2xl h-96"
    >
      <div style={{ transform: 'translateZ(-25px)', transformStyle: 'preserve-3d' }} className="absolute inset-0">
        <BentoCard icon={<Smartphone />} title="Web & App Development" className="col-span-1 row-span-1" />
        <BentoCard icon={<Code />} title="Custom Software" className="col-span-1 row-span-1" />
        <BentoCard icon={<ShoppingCart />} title="E-commerce Solutions" className="col-span-1 row-span-1" />
        <BentoCard className="col-span-1 row-span-1 p-4 flex items-center justify-center">
          <Link href="/contact" className="text-center font-semibold text-green-400 hover:text-white transition-colors">
            Start Your Project <ArrowRight className="inline ml-1" size={16} />
          </Link>
        </BentoCard>
      </div>
    </motion.div>
  );
};

// --- BENTO CARD SUB-COMPONENT ---
const BentoCard: FC<{ icon?: ReactNode; title?: string; className?: string, children?: ReactNode }> = ({ icon, title, className, children }) => {
  return (
    <div className={`bg-slate-900/80 border border-slate-800 rounded-xl p-6 flex flex-col justify-center items-center text-center ${className}`}>
      {icon && <div className="text-green-400 mb-2">{icon}</div>}
      {title && <h3 className="font-semibold text-white">{title}</h3>}
      {children}
    </div>
  );
};

export default Hero;