// app/services/page.tsx (or your services page file)
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Monitor, ShoppingCart, RefreshCw, Smartphone, BarChart2, Share2,
  FileText, Archive, Users, TrendingUp, Clipboard, Calendar,
  Award, Grid, MessageSquare, LifeBuoy
} from 'lucide-react';
import type { FC, ReactNode } from 'react';

// Import your existing components
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import FinalCTA from '@/app/components/FinalCTA';

// --- Data Structure ---
// Using Lucide React icons for consistency and a cleaner look.
const serviceCategories = [
  {
    id: 'web-mobile',
    title: 'Web & Mobile Presence',
    services: [
      { icon: <Monitor />, title: 'Professional Business Website', description: 'Clean, fast, mobile-friendly websites that serve as your online identity.' },
      { icon: <ShoppingCart />, title: 'E-commerce Store Setup', description: 'Secure, easy-to-use digital stores to start selling your products online.' },
      { icon: <RefreshCw />, title: 'Website Redesign', description: 'Modernizing outdated websites to work flawlessly on all devices.' },
      { icon: <Smartphone />, title: 'Mobile App Development', description: 'Dedicated Android & iOS apps to connect directly with your customers.' },
      { icon: <BarChart2 />, title: 'Basic SEO Setup', description: 'Helping customers find you on Google when they search for your services.' },
      { icon: <Share2 />, title: 'Social Media Integration', description: 'Connecting your site with Facebook, Instagram, and WhatsApp.' },
    ],
  },
  {
    id: 'custom-software',
    title: 'Custom Business Software',
    services: [
      { icon: <FileText />, title: 'Custom Billing Software', description: 'Simplifying your accounting with software built for your business workflow.' },
      { icon: <Archive />, title: 'Inventory Management', description: 'Automatically track stock, so you know exactly what you have and need.' },
      { icon: <Users />, title: 'Simple CRM Systems', description: 'Organize all customer information in one place to provide better service.' },
      { icon: <TrendingUp />, title: 'Business Reporting Dashboards', description: 'A simple, one-page view of your most important business data.' },
      { icon: <Clipboard />, title: 'Employee Management Portals', description: 'A private system for staff to manage attendance, leave, and announcements.' },
    ],
  },
  {
    id: 'customer-engagement',
    title: 'Customer Engagement',
    services: [
      { icon: <Calendar />, title: 'Appointment & Booking Systems', description: 'Perfect for doctors, salons, and consultants to let customers book online.' },
      { icon: <Award />, title: 'Digital Loyalty & Coupon Systems', description: 'Encourage repeat business with digital coupons or a loyalty point system.' },
      { icon: <Grid />, title: 'Digital QR Code Menus', description: 'A modern, touch-free way for restaurants and shops to display offerings.' },
    ],
  },
  {
    id: 'strategy-support',
    title: 'Strategy & Support',
    services: [
      { icon: <MessageSquare />, title: 'Technology Consultation', description: 'We’ll help you understand your needs and suggest the right solution, for free.' },
      { icon: <LifeBuoy />, title: 'Technical Support', description: 'Keeping your website and software running smoothly so you can focus on business.' },
    ],
  },
];

// --- Main Page Component ---
const AllServicesPage: FC = () => {
  const [activeCategory, setActiveCategory] = React.useState(serviceCategories[0].id);

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  return (
    <div className="bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-black text-white py-32 md:py-40"
      >
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(22,163,74,0.15),_transparent_40%)]" />
        <div className="container relative z-10 mx-auto flex flex-col items-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Our Full Service Catalog
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl">
            A complete look at the digital solutions we build to help your business modernize, automate, and grow.
          </p>
        </div>
      </motion.section>

      {/* Main Services Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Sticky Sidebar Navigation (Desktop Only) */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="font-semibold text-slate-200 mb-4 tracking-wide">Categories</h3>
                <ul className="space-y-2">
                  {serviceCategories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => handleCategoryClick(cat.id)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors text-slate-400 ${
                          activeCategory === cat.id ? 'bg-slate-800 text-green-400' : 'hover:bg-slate-900'
                        }`}
                      >
                        {cat.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Service Content */}
            <main className="lg:col-span-3">
              {serviceCategories.map((cat) => (
                <motion.div
                  key={cat.id}
                  id={cat.id}
                  onViewportEnter={() => setActiveCategory(cat.id)}
                  className="mb-20 scroll-mt-24"
                >
                  <h2 className="text-3xl font-bold text-white mb-8">{cat.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cat.services.map((svc) => (
                      <ServiceCard key={svc.title} {...svc} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </main>
          </div>
        </div>
      </section>
      
      <FinalCTA />
      <Footer />
    </div>
  );
};

// --- Reusable Service Card Component ---
const ServiceCard: FC<{ icon: ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl bg-slate-900/80 p-6 border border-slate-800 overflow-hidden"
    >
      {/* Directional Shine Effect */}
      <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 [background:radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(56,189,248,0.15),transparent_40%)]" />
      
      <div className="relative z-10">
        <div className="mb-4 text-green-400">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default AllServicesPage;