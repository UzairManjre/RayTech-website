// components/Hero.tsx
"use client";

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { FC } from 'react';
import Link from 'next/link'; // Make sure Link is imported

// Define props for the FeatureItem component
interface FeatureItemProps {
  text: string;
}

// A small component for feature list items to keep the code clean
const FeatureItem: FC<FeatureItemProps> = ({ text }) => (
  <div className="flex items-center">
    <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
    <span className="text-slate-300">{text}</span>
  </div>
);

const Hero: FC = () => {
  // Animation variants for Framer Motion, typed with the `Variants` type
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-gray-900 text-white flex items-center justify-center overflow-hidden">
      {/* Background Grid & Gradient */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-transparent"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-gray-900 to-gray-900 animate-gradient-xy blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Column (Text) */}
        <div className="flex flex-col items-start text-left">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            variants={itemVariants}
          >
            Your Partner in <br /> Digital Growth
          </motion.h1>
          <motion.p className="text-lg text-slate-400 mb-8 max-w-lg" variants={itemVariants}>
            Modernize and automate your business with tailored technology solutions. Streamline operations, boost efficiency, and stay ahead.
          </motion.p>

          <motion.div className="space-y-3 mb-10" variants={itemVariants}>
            <FeatureItem text="Website & app development" />
            <FeatureItem text="Custom business software" />
            <FeatureItem text="E-commerce solutions" />
          </motion.div>

          {/* Action Buttons -- THIS SECTION IS FIXED */}
          <motion.div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4" variants={itemVariants}>
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-20 animate-shimmer" />
              Book Free Consultation
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center justify-center px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
            >
              Learn More <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Right Column (Image) */}
        <motion.div className="flex justify-center" variants={itemVariants}>
          <motion.div
            className="relative w-full max-w-[600px] aspect-[4/3] p-2 rounded-2xl bg-white/10 border border-white/20 shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/Images/Home/Hero_img.avif"
              alt="Digital growth illustration"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;