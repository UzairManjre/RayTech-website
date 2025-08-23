'use client';
import { useState } from 'react';

const faqData = [
  {
    question: "Which businesses do you work with?",
    answer: "We support small and medium businesses across retail, healthcare, finance, and more. Solutions are customized for your needs."
  },
  {
    question: "How long does a project take?",
    answer: "A standard project, like a new website, typically takes between 4 to 8 weeks from our initial consultation to launch. We provide a detailed timeline after the discovery phase."
  },
  {
    question: "Do you connect with current tools?",
    answer: "Yes, absolutely. We specialize in integrating our custom solutions with your existing systems (like CRMs, accounting software, etc.) to ensure a smooth and unified workflow."
  },
  {
    question: "What happens during a consultation?",
    answer: "Our free consultation is a discovery session. We'll listen to your challenges, assess your current technology, and discuss potential solutions and strategies to help you modernize and grow."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-gray-900">Answers to your top questions</h2>
        <p className="text-gray-600">Quick info on our services and process.</p>
      </div>
      <div className="max-w-3xl mx-auto">
        {faqData.map((item, idx) => (
          <div key={item.question} className="border-b border-gray-200">
            <button
              className="w-full flex justify-between items-center py-5 text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
            >
              <span className="font-medium text-gray-900">{item.question}</span>
              <svg
                className={`w-5 h-5 ml-4 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === idx && (
              <div id={`faq-answer-${idx}`} className="pt-4 pb-6 text-gray-700">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;