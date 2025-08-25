// Add "use client" at the top because TextType uses React hooks (useState, useEffect)
"use client";

import React from "react";
import TextType from "./TextType"; // Make sure the path to TextType.js is correct

const MissionHero = () => (
  <section className="bg-black text-white">
    <div className="container mx-auto flex flex-col items-center justify-center px-6 py-32 md:py-40 text-center">
      <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase leading-tight mb-8">
        Our Mission:{" "}
        <TextType
          as="span" // Render the component as a span element
          className="block md:inline" // Pass the original class names
          text={["Technology as a Catalyst for Growth."]}
          typingSpeed={100}
          loop={false} // Set to false so it types only once
          showCursor={true}
          cursorCharacter="|"
        />
      </h1>
    </div>
  </section>
);

export default MissionHero;