// Add "use client" at the top because TextType uses React hooks (useState, useEffect)
"use client";

import React from "react";
import TextType from "./TextType"; // Make sure the path to TextType.js is correct

const MissionHero = () => (
  <section className="bg-black text-white">
    <div className="container mx-auto flex flex-col items-center justify-center px-6 py-32 md:py-40 text-center">
      <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase leading-tight mb-8">
        Our Mission:{" "}
        {/* Added a span wrapper for the gradient effect */}
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          <TextType
            as="span"
            className="block md:inline"
            text={["Technology as a Catalyst for Growth."]}
            typingSpeed={100}
            loop={false}
            showCursor={true}
            cursorCharacter="|"
          />
        </span>
      </h1>
    </div>
  </section>
);

export default MissionHero;