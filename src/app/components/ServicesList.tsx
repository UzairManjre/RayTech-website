// components/ServicesList.tsx
"use client";

import React, { useRef } from 'react';
import { motion, easeOut } from 'framer-motion';
import { LayoutTemplate, Cog, ShoppingCart, LifeBuoy } from 'lucide-react';
import type { FC, ReactNode } from 'react';

// Service data with updated Lucide icons
const services = [
  {
    icon: <LayoutTemplate size={32} />,
    title: "Website & App Development",
    description: "Build fast, secure, and scalable digital platforms tailored to your business needs. Enhance your online presence and streamline user experiences."
  },
  {
    icon: <Cog size={32} />,
    title: "Custom Software Solutions",
    description: "Automate workflows with bespoke software for billing, inventory, and CRM. Improve efficiency and gain full control over your business operations."
  },
  {
    icon: <ShoppingCart size={32} />,
    title: "E-commerce Platforms",
    description: "Launch robust online stores with seamless payment integration and inventory management. Drive sales and manage your products with ease."
  },
  {
    icon: <LifeBuoy size={32} />,
    title: "Ongoing Support & Optimization",
    description: "Receive continuous technical support and performance enhancements. Keep your systems running smoothly as your business evolves."
  }
];

const ServicesList: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  return (
    <section id="services-list" className="bg-black py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-[clamp(2rem,1.5rem+2vw,3rem)] font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-display">
            A Suite of Digital Solutions
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            We provide end-to-end services to build, launch, and grow your digital presence.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {services.map((service) => {
            const { icon, title, description } = service;
            return <TracingBeamCard key={title} icon={icon} title={title} description={description} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

// --- Reusable Tracing Beam Card ---

interface TracingBeamCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const TracingBeamCard: FC<TracingBeamCardProps> = ({ icon, title, description }) => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      variants={itemVariants}
      className="relative p-8 rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden group"
      // This custom property is used by the pseudo-element
      style={{ background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(56, 189, 248, 0.1), transparent 80%)' }}
    >
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          border: '1px solid transparent',
          background: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(56, 189, 248, 0.2), transparent 80%)',
        }}
      />
      <div className="relative z-10">
        <div className="mb-4 text-green-400">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServicesList;