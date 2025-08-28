// app/your-webapp-route/page.tsx
'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PenTool, Code, Smartphone, Rocket } from 'lucide-react';
import type { FC } from 'react';
import Image from 'next/image';

// Reusable components
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import FinalCTA from '@/app/components/FinalCTA';
import PageHero from '@/app/components/PageHero';

// --- DATA FOR THE SCROLLING JOURNEY ---
const journeySteps = [
    { icon: <PenTool size={28} />, title: "Discovery & UI/UX Design", description: "We start by understanding your goals to create a strategic roadmap, then design intuitive interfaces for a seamless user experience." },
    { icon: <Code size={28} />, title: "Development & Testing", description: "Our expert developers bring the designs to life using the latest technologies, ensuring your platform is fast, secure, and reliable on all devices." },
    { icon: <Rocket size={28} />, title: "Launch & Ongoing Support", description: "We deploy your application and provide continuous support and optimization to ensure it runs smoothly as your business grows." }
];

const nodePositions = [ { x: 100, y: 100 }, { x: 150, y: 300 }, { x: 50, y: 500 } ];

// --- MAIN PAGE COMPONENT ---
export default function WebAppDevelopmentPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  
  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <div className="bg-black">
      <Navbar />
      <PageHero title="Crafting Your Digital Front Door" />

      <section ref={scrollRef} className="relative py-24 md:py-32">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Sticky Text Cards */}
          <div className="relative h-[300vh]">
            <div className="sticky top-1/2 -translate-y-1/2">
              {journeySteps.map((step, index) => {
                const start = index / journeySteps.length;
                const end = (index + 1) / journeySteps.length;
                const opacity = useTransform(scrollYProgress, [start - 0.1, start, end - 0.1, end], [0, 1, 1, 0]);
                const scale = useTransform(scrollYProgress, [start - 0.1, start], [0.9, 1]);
                
                return (
                  <motion.div style={{ opacity }} key={index} className="absolute inset-0">
                    <div className="flex h-full flex-col justify-center">
                      <motion.div style={{ scale }} className="mb-4 text-green-400">{step.icon}</motion.div>
                      <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-slate-400 text-lg">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Right Column: Animated Blueprint Grid */}
          {/* FIX: Made this column sticky so it stays in view */}
          <div className="hidden lg:flex h-screen items-center justify-center sticky top-0">
            <div className="relative w-full h-[600px] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] rounded-lg overflow-hidden">
              <svg width="100%" height="100%" viewBox="0 0 200 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                <motion.path
                    d={`M ${nodePositions[0].x} ${nodePositions[0].y} L ${nodePositions[1].x} ${nodePositions[1].y} L ${nodePositions[2].x} ${nodePositions[2].y}`}
                    stroke="url(#pathGradient)" strokeWidth="4" strokeLinecap="round" style={{ pathLength }}
                />
                 <defs>
                    <linearGradient id="pathGradient" gradientUnits="userSpaceOnUse" x1="100" y1="100" x2="100" y2="500">
                        <stop stopColor="#10B981" /><stop offset="1" stopColor="#2DD4BF" />
                    </linearGradient>
                </defs>
              </svg>

              {nodePositions.map((pos, index) => {
                const start = index / journeySteps.length;
                const end = start + (1 / journeySteps.length);
                const scale = useTransform(scrollYProgress, [start - 0.05, start, end], [1, 1.2, 1]);
                const opacity = useTransform(scrollYProgress, [start - 0.1, start, end], [0.3, 1, 0.3]);

                return (
                  <motion.div 
                    key={index}
                    style={{ 
                      scale,
                      opacity,
                      x: '-50%', y: '-50%',
                      left: `${(pos.x / 200) * 100}%`,
                      top: `${(pos.y / 600) * 100}%`,
                    }} 
                    className="absolute h-6 w-6 rounded-full bg-green-500 shadow-[0_0_15px_3px_rgba(22,163,74,0.6)]" 
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}