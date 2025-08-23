import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurMission = () => (
  <section className="bg-gray-100 py-16 md:py-24">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-16 px-4">
      {/* Left: Text Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Simplifying technology for your business
        </h2>
        <Link
          href="#"
          className="inline-block bg-green-300 hover:bg-green-400 text-gray-800 font-semibold py-3 px-6 rounded-md mt-6 transition-colors"
        >
          Our mission
        </Link>
      </div>
      {/* Right: Image */}
      <div className="w-full flex justify-center">
        <Image
          src="/Images/Home/placeholder.avif"
          alt="Diverse team collaborating in modern office"
          width={520}
          height={360}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  </section>
);

export default OurMission;
