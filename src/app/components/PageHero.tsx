// components/PageHero.tsx
"use client";

import React, { useEffect, useRef, FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import createGlobe from "cobe";
import { useSpring } from "react-spring";
interface PageHeroProps {
  title?: string;
}

const PageHero: FC<PageHeroProps> = ({ title }: PageHeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.1, 0.1, 0.1],
      markers: [
        { location: [37.75, -122.45], size: 0.03 },
        { location: [40.71, -74.0], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi + r.get();
        phi += 0.005;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => canvasRef.current && (canvasRef.current.style.opacity = "1"));
    
    return () => globe.destroy();
  }, []);

  return (
    <section className="relative bg-black pb-16 md:pb-24">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {/* Globe Canvas */}
        <canvas
          ref={canvasRef}
          onPointerDown={(e) => {
            pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
            canvasRef.current && (canvasRef.current.style.cursor = "grabbing");
          }}
          onPointerUp={() => {
            pointerInteracting.current = null;
            canvasRef.current && (canvasRef.current.style.cursor = "grab");
          }}
          onPointerOut={() => {
            pointerInteracting.current = null;
            canvasRef.current && (canvasRef.current.style.cursor = "grab");
          }}
          onMouseMove={(e) => {
            if (pointerInteracting.current !== null) {
              const delta = e.clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              api.start({ r: delta / 200 });
            }
          }}
          onTouchMove={(e) => {
            if (pointerInteracting.current !== null && e.touches[0]) {
              const delta = e.touches[0].clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              api.start({ r: delta / 100 });
            }
          }}
          className="w-full max-w-3xl md:max-w-2xl aspect-square opacity-0 transition-opacity duration-1000 translate-y-16"
          style={{ cursor: "grab" }}
        />
      </div>
      
  <div className="relative z-10 container mx-auto flex flex-col items-center justify-center px-6 py-40 md:py-56 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
         <h1 className="font-display text-[clamp(2.5rem,1.5rem+4vw,4.5rem)] font-bold tracking-tighter mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
  {title || "We Engineer Digital Ecosystems."}
</h1>

          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            From custom software to scalable web platforms, explore our suite of services designed for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              Book a Consultation
            </Link>
            <Link
              href="#services-list" // This now links to a section on the same page
              className="inline-flex items-center justify-center px-8 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;