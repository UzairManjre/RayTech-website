// components/Services.tsx
"use client";

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FC } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Define the shape of a service and the updated data
interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Website & App Development',
    description:
      'We craft modern, responsive websites and high-performance mobile apps that captivate your audience and boost your online presence. From UI/UX design to deployment, we deliver digital experiences that are both beautiful and functional.',
    imageUrl: '/Images/Home/app and web dev ppl.avif',
    href: '/services/web-app-development',
  },
  {
    id: 2,
    title: 'Custom Software Solutions',
    description:
      'Automate your unique business processes with software built just for you. We develop tailored CRM, ERP, and inventory management systems that streamline operations, reduce manual effort, and drive significant productivity gains.',
    imageUrl: '/Images/Home/crm soft.avif',
    href: '/services/custom-software',
  },
];

const Services: FC = () => {
  const [activeService, setActiveService] = useState<number>(services[0].id);

  return (
    <section className="bg-black text-white py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Smart Tech for Business Growth
          </h2>
          <p className="text-lg text-slate-400">
            Discover our core services designed to help your business streamline processes and improve efficiency.
          </p>
        </div>

        {/* --- RESPONSIVE GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">
          {/* Left Column (Sticky Image): HIDDEN on mobile, VISIBLE on desktop */}
          <div className="hidden lg:flex lg:col-span-3 w-full h-[80vh] top-[10vh] lg:sticky items-center justify-center">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                {services.map(
                  (service) =>
                    activeService === service.id && (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={service.imageUrl}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column (Text): Full width on mobile */}
          <div className="lg:col-span-2 w-full">
            {services.map((service, index) => (
              // Add margin-top to all but the first item on mobile for spacing
              <motion.div
                key={service.id}
                onViewportEnter={() => setActiveService(service.id)}
                className={`flex flex-col justify-center min-h-0 lg:min-h-[60vh] ${index > 0 ? 'mt-16 lg:mt-0' : ''}`}
              >
                {/* Image for MOBILE ONLY */}
                <div className="relative w-full h-64 rounded-xl overflow-hidden block lg:hidden mb-6">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.description}</p>
                <Link
                  href={service.href}
                  className="group inline-flex items-center text-green-400 font-semibold transition-colors hover:text-green-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;