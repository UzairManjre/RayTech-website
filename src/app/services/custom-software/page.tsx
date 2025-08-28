// app/your-service-route/page.tsx
'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DollarSign, Box, Users, Zap, CheckCircle } from 'lucide-react';
import type { FC } from 'react';

// Reusable components
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import FinalCTA from '@/app/components/FinalCTA';
import PageHero from '@/app/components/PageHero';

// --- DATA FOR THE SCROLLING JOURNEY ---
const journeySteps = [
  {
    icon: <Zap size={28} />,
    title: "Escape the Limits of Off-the-Shelf Software",
    description: "Generic software forces you to adapt. We build software that adapts to you, eliminating bottlenecks and filling the gaps off-the-shelf products can't."
  },
  {
    icon: <DollarSign size={28} />,
    title: "Custom Billing & Invoicing",
    description: "Automate your finances and get paid faster with a system built for your specific business model."
  },
  {
    icon: <Box size={28} />,
    title: "Inventory Management Systems",
    description: "Get real-time stock tracking, low-level alerts, and sales data to eliminate guesswork and optimize your supply chain."
  },
  {
    icon: <Users size={28} />,
    title: "Customer Relationship Management (CRM)",
    description: "Build a simple, powerful CRM to manage leads, track interactions, and provide exceptional service."
  },
  {
    icon: <CheckCircle size={28} />,
    title: "The Tangible Benefits",
    description: "Increase efficiency, reduce human error, gain actionable insights, and build a platform that scales with your business."
  }
];

// --- MAIN PAGE COMPONENT ---
export default function CustomSoftwarePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  
  const nodeOpacities = journeySteps.map((_, index) => {
    const start = index / journeySteps.length;
    const end = (index + 1) / journeySteps.length;
    return useTransform(scrollYProgress, [start - 0.05, start, end - 0.1, end], [0.3, 1, 1, 0.3]);
  });

  return (
    <div className="bg-black" style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
    }}>
      <Navbar />
      
      <PageHero title="Software That Works The Way You Do" />

      <section ref={scrollRef} className="relative py-24 md:py-32">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Sticky Text Cards */}
          <div className="relative h-[400vh]"> {/* Increased height for better scroll spacing */}
            <div className="sticky top-1/2 -translate-y-1/2">
              {journeySteps.map((step, index) => {
                const start = index / journeySteps.length;
                const end = (index + 1) / journeySteps.length;
                const opacity = useTransform(scrollYProgress, [start - 0.05, start, end - 0.1, end], [0, 1, 1, 0]);
                const scale = useTransform(scrollYProgress, [start - 0.05, start], [0.8, 1]);
                
                return (
                  <motion.div style={{ opacity }} key={index} className="absolute inset-0">
                    <div className="relative flex h-full flex-col justify-center">
                      <motion.div style={{ opacity: 0.1, scale }} className="absolute -z-10 left-0 top-1/2 -translate-y-1/2 text-slate-700">
                        {React.cloneElement(step.icon, { size: 128 })}
                      </motion.div>
                      
                      <div className="mb-4 text-green-400">{step.icon}</div>
                      <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-slate-400 text-lg">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Right Column: Animated SVG Path with Nodes */}
          {/* FIX: Made this column sticky to keep it in view during the scroll */}
          <div className="hidden lg:flex h-screen items-center justify-center sticky top-0">
            <div className="relative w-full h-[600px]">
                <svg width="200" height="600" viewBox="0 0 200 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-1/2 -translate-x-1/2">
                <motion.path d="M 100 20 V 580" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round" style={{ pathLength }} />
                
                {nodeOpacities.map((opacity, index) => (
                    <motion.circle key={index} cx="100" cy={60 + (index * 130)} r="10" fill="#10B981" style={{ opacity }} />
                ))}

                <defs>
                    <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="100" y1="20" x2="100" y2="580">
                    <stop stopColor="#10B981" /><stop offset="1" stopColor="#2DD4BF" />
                    </linearGradient>
                </defs>
                </svg>
            </div>
          </div>
        </div>
      </section>

      <TechStackMarquee />
      <FinalCTA />
      <Footer />
    </div>
  );
}

// --- Tech Stack Marquee Sub-Component ---
const TechStackMarquee: FC = () => {
  const logos = [
    { src: "/Images/svgs/python-.svg", alt: "Python" },
    { src: "/Images/svgs/nodejs.svg", alt: "Node.js" },
    { src: "/Images/svgs/react-svgrepo-com.svg", alt: "React" },
   
  ];
  return (
    <section className="py-16 md:py-24">
       <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Built With Modern, Reliable Technology
      </h2>
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <motion.div
          className="flex gap-16"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <Image key={index} src={logo.src} alt={logo.alt} width={80} height={80} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all" />
          ))}
        </motion.div>
      </div>
    </section>
  );
};