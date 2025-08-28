// components/OurMission.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, easeOut } from 'framer-motion';
import type { FC } from 'react';

const OurMission: FC = () => {
  const text = "Simplifying technology for your business";
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <section className="relative bg-black text-white h-[80vh] min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Home/Grp.avif" // Use a high-quality, relevant background image
          alt="Diverse team collaborating in modern office"
          fill
          className="object-cover"
          quality={100}
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h2
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="font-heading text-4xl md:text-6xl font-bold tracking-tight"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Link
            href="/mission"
            className="group mt-8 inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            Explore Our Mission
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;