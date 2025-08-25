// components/Footer.tsx
'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import type { FC } from 'react';

// Data for social links for easy management
const socialLinks = [
  { href: 'https://twitter.com', label: 'Twitter', icon: <Twitter size={20} /> },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: <Linkedin size={20} /> },
  { href: 'https://facebook.com', label: 'Facebook', icon: <Facebook size={20} /> },
];

// Data for navigation links
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

const Footer: FC = () => {
  return (
    <footer className="relative bg-black text-white pt-20 pb-8">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-2">RayTechnica</h3>
            <p className="text-slate-400 text-sm max-w-xs">
              Your partner in digital growth. We build modern technology solutions to automate and scale your business.
            </p>
          </div>

          {/* Columns 2, 3, 4: Navigation Links */}
          {navSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-slate-200 mb-4 tracking-wide">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-slate-400 hover:text-green-400 transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright and Socials */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} RayTechnica. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-slate-500 hover:text-green-400 transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;