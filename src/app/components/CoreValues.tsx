// components/CoreValues.tsx
'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Feather, ShieldCheck, BrainCircuit } from 'lucide-react';
import type { FC, ReactNode } from 'react';

// Updated data with Lucide React icons
const values: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <Handshake size={32} />,
    title: "Partnership",
    description: "We work with you, not just for you, fostering collaboration to achieve shared success.",
  },
  {
    icon: <Feather size={32} />,
    title: "Simplicity",
    description: "Powerful technology should be elegant and easy to use. We build intuitive solutions.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Integrity",
    description: "Our commitment to transparency and honesty is the foundation of every project we undertake.",
  },
  {
    icon: <BrainCircuit size={32} />,
    title: "Innovation",
    description: "We are constantly exploring new technologies to find smarter, better solutions for your business.",
  },
];

const CoreValues: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="bg-black py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            The Principles That Guide Us
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Our values are the cornerstone of our culture and the promise we make to every client.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {values.map((value) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- Reusable Aurora Value Card Sub-Component ---

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ValueCard: FC<ValueCardProps> = ({ icon, title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      variants={itemVariants}
      className="group relative rounded-2xl bg-slate-900/80 p-8 border border-slate-800 overflow-hidden"
    >
      {/* Aurora Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background:radial-gradient(350px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(56,189,248,0.1),transparent_40%)]" />
      
      <div className="relative z-10 flex flex-col items-start">
        <div className="mb-4 text-green-400">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default CoreValues;