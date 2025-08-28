// components/Footer.tsx
'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useSpring } from 'react-spring';
import type { FC, ReactNode } from 'react';

// --- DATA ---
const socialLinks = [
  { href: 'https://twitter.com', label: 'Twitter', icon: <Twitter size={20} /> },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: <Linkedin size={20} /> },
  { href: 'https://facebook.com', label: 'Facebook', icon: <Facebook size={20} /> },
];

const navSections = [
  {
    title: 'Services',
    links: [
      { href: '/services/web-app-development', label: 'Web & App Development' },
      { href: '/services/custom-software', label: 'Custom Software' },
      { href: '/services/e-commerce', label: 'E-commerce Platforms' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/contact', label: 'Contact' },
      { href: '/blog', label: 'Blog' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms-of-service', label: 'Terms of Service' },
    ],
  },
];

// --- MAIN COMPONENT ---
const Footer: FC = () => {
  return (
    <footer className="relative bg-black text-white pt-20 pb-8 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-950 animate-gradient-xy" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              RayTechnica
            </h3>
            <p className="text-slate-400 text-sm max-w-xs">
              Your partner in digital growth. We build modern technology solutions to automate and scale your business.
            </p>
          </div>

          {navSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-slate-200 mb-4 tracking-wide">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="group relative text-slate-400 hover:text-green-400 transition-colors duration-300">
                      {link.label}
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-green-400 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} RayTechnica. All rights reserved.
          </p>
          <div className="flex space-x-2">
            {socialLinks.map((link) => (
              <MagneticIcon key={link.label} href={link.href} aria-label={link.label}>
                {link.icon}
              </MagneticIcon>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- MAGNETIC ICON SUB-COMPONENT ---
const MagneticIcon: FC<{ children: ReactNode; href: string; 'aria-label': string }> = ({ children, ...props }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: x * 0.2, y: y * 0.2 }}
      transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.5 }}
      className="relative z-10 block p-3 rounded-full text-slate-500 hover:text-green-400 hover:bg-slate-800/50 transition-colors duration-300"
      {...props}
    >
      {children}
    </motion.a>
  );
};

export default Footer;