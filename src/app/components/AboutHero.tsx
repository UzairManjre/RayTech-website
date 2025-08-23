import React from "react";
import Link from "next/link";

const AboutHero = () => (
  <section className="bg-black py-24 md:py-32">
    <div className="container mx-auto px-4">
      <h1 className="text-6xl md:text-8xl font-bold uppercase text-white leading-none text-center md:text-left">
        <span className="block">EMPOWERING</span>
        <span className="block">YOUR BUSINESS</span>
        <span className="block">WITH</span>
        <span className="block">TECHNOLOGY</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 items-center">
        <p className="text-gray-300 text-lg md:text-xl">
          We help businesses modernize and automate, making technology simple and effective for your growth.
        </p>
        <p className="text-gray-300 text-lg md:text-xl">
          Our team guides you through every step, ensuring solutions are tailored to your unique needs.
        </p>
        <div className="flex md:justify-end justify-start">
          <Link
            href="/contact"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md text-lg transition-colors"
          >
            Book now
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default AboutHero;
