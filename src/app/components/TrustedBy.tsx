// components/TrustedBy.tsx
"use client";

import { cn } from "@/lib/utils"; // A utility for combining class names (see setup below)
import React, { useEffect, useState } from "react";
import {
  Banknote,
  HeartPulse,
  ShoppingCart,
  Factory,
  Truck,
  Briefcase,
} from "lucide-react";

// Data for the sectors with corresponding icons
const sectors = [
  { name: "Finance and banking", icon: <Banknote /> },
  { name: "Healthcare", icon: <HeartPulse /> },
  { name: "Retail and e-commerce", icon: <ShoppingCart /> },
  { name: "Manufacturing", icon: <Factory /> },
  { name: "Logistics", icon: <Truck /> },
  { name: "Professional services", icon: <Briefcase /> },
];

const TrustedBy = () => (
  <section className="bg-slate-950 antialiased">
    <div className="relative flex flex-col items-center justify-center py-20 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Trusted By Top Tech-Driven Sectors
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          We empower organizations across diverse industries to modernize, automate, and grow with confidence.
        </p>
      </div>
      <InfiniteMovingCards items={sectors} direction="right" speed="slow" />
    </div>
  </section>
);

// --- Reusable InfiniteMovingCards Component ---

interface InfiniteMovingCardsProps {
  items: { name: string; icon: React.ReactNode }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden mt-12",
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="w-[200px] max-w-full relative rounded-lg border border-slate-700 p-5 flex-shrink-0 bg-slate-900"
            key={item.name}
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-slate-400">{item.icon}</span>
              <span className="text-sm font-semibold text-slate-300">
                {item.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrustedBy;