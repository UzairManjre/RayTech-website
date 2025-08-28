// components/ServicesHighlight.tsx
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import type { FC } from 'react';

// Service data array remains the same
const services = [
  {
    title: 'Website & App Development',
    description: 'Modern, responsive sites and apps to boost your online presence.',
    image: '/Images/Home/app and web dev ppl.avif',
  },
  {
    title: 'Custom Software Solutions',
    description: 'Tailored business software for productivity and growth.',
    image: '/Images/Home/crm soft.avif',
  },
  {
    title: 'E-commerce Platforms',
    description: 'Robust, scalable online stores for your business.',
    image: '/Images/Home/ecom photo.avif',
  },
];

const ServicesHighlight: FC = () => {
  return (
    <section className="bg-black text-white py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Modern Solutions for Business Growth
          </h2>
          <p className="text-lg text-slate-400">
            Discover our core services designed to streamline processes, improve efficiency, and embrace digital transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <AuroraCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Reusable Aurora Card Component ---

interface AuroraCardProps {
  title: string;
  description: string;
  image: string;
}

const AuroraCard: FC<AuroraCardProps> = ({ title, description, image }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4 }}
      className="group relative w-full rounded-xl bg-slate-900/80 p-6 shadow-2xl border border-slate-700 overflow-hidden"
    >
      {/* Aurora Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background:radial-gradient(300px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(56,189,248,0.2),transparent_40%)]" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="relative mb-4 w-full h-40">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg border border-slate-600"
          />
        </div>
        <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServicesHighlight;