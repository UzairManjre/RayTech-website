import React from "react";
import Link from "next/link";


const FinalCTA = () => (
  <section className="relative py-16 overflow-hidden">
    {/* Animated Gradient Glassmorphism Background */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="w-full h-full bg-gradient-to-tr from-green-400/20 via-white/80 to-green-600/20 animate-gradient-x blur-2xl opacity-80" />
    </div>
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4 relative z-10">
  <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gray-900 text-center md:text-left mb-4 md:mb-0 drop-shadow-lg animate-fade-in-up">
        Ready to modernize your business?
      </h2>
      <div className="flex gap-4 animate-fade-in">
        <Link
          href="/contact"
          className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300 text-lg animate-fade-in-up"
        >
          Book now
        </Link>
        <Link
          href="/contact"
          className="bg-white/10 border border-gray-300 text-gray-700 hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-md transition-all duration-300 text-lg backdrop-blur-md animate-fade-in-up"
        >
          Contact us
        </Link>
      </div>
    </div>
  </section>
);

export default FinalCTA;