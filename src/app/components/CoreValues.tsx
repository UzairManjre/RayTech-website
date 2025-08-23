import React from "react";
import { FaHandshake, FaLightbulb, FaCheckCircle, FaCogs } from "react-icons/fa";

const values = [
  {
    icon: <span className="mb-4 block"><FaHandshake size={40} color="#22c55e" /></span>,
    title: "Partnership",
    description: "We work with you, not just for you.",
  },
  {
    icon: <span className="mb-4 block"><FaCheckCircle size={40} color="#22c55e" /></span>,
    title: "Simplicity",
    description: "Powerful technology should be easy to use.",
  },
  {
    icon: <span className="mb-4 block"><FaLightbulb size={40} color="#22c55e" /></span>,
    title: "Integrity",
    description: "Transparent and honest in everything we do.",
  },
  {
    icon: <span className="mb-4 block"><FaCogs size={40} color="#22c55e" /></span>,
    title: "Innovation",
    description: "Constantly seeking better solutions for your business.",
  },
];

const CoreValues = () => (
  <section className="bg-gray-100 py-16 md:py-24">
    <div className="container mx-auto px-4">
  <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {values.map((value, idx) => (
          <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            {value.icon}
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreValues;
