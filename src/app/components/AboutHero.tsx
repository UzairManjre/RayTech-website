// components/AboutHero.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cubicBezier } from 'framer-motion';
import type { FC } from 'react';

// Image data for the scroller/grid
const images = [
  "/Images/Home/Grp.avif",
  "/Images/Home/crm soft.avif",
  "/Images/Home/app and web dev ppl.avif",
  "/Images/Home/ecom photo.avif",
];

const AboutHero: FC = () => {
  // Hooks for the 3D desktop grid
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Animation variants for the kinetic typography
  const heading = "EMPOWERING YOUR BUSINESS WITH TECHNOLOGY";
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };
  const charVariants = {
    hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: cubicBezier(0.2, 0.65, 0.3, 0.9) } },
  };

  return (
    <section onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="relative bg-black py-24 md:py-32">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Kinetic Typography */}
        <div className="z-10">
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // Responsive font size and word wrapping
            className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold uppercase text-white leading-none"
          >
            {heading.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block lg:whitespace-nowrap mr-4">
                {word.split("").map((char, charIndex) => (
                  <motion.span key={charIndex} variants={charVariants} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg md:text-xl mt-8 max-w-md"
          >
            We help businesses modernize and automate, making technology simple and effective for your growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>

        {/* --- VISUALS SECTION --- */}
        <div>
          {/* Mobile: Infinite Vertical Scroller */}
          <div className="block lg:hidden mt-8 h-[450px] w-full max-w-sm mx-auto overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]">
            <div className="animate-scroll-vertical flex flex-col gap-4">
              {[...images, ...images].map((src, index) => (
                <div key={index} className="relative w-full h-64 rounded-xl overflow-hidden">
                  <Image src={src} alt={`About us image ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop: 3D Parallax Image Grid */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="hidden lg:block relative h-[450px] w-full"
          >
            <div style={{ transform: 'translateZ(-50px)', transformStyle: 'preserve-3d' }} className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4">
              <GridImage src={images[0]} alt="Team collaborating" />
              <GridImage src={images[1]} alt="Software UI" className="col-span-2" />
              <GridImage src={images[2]} alt="Developers at work" className="row-span-2" />
              <GridImage src={images[3]} alt="E-commerce project" className="col-span-2 row-span-2" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const GridImage: FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 2, duration: 0.8, type: 'spring' }}
    viewport={{ once: true }}
    style={{ transformStyle: 'preserve-3d' }}
    className={`relative rounded-xl overflow-hidden ${className}`}
  >
    <Image src={src} alt={alt} fill className="object-cover" />
    <div className="absolute inset-0 bg-black/20" />
  </motion.div>
);

export default AboutHero;