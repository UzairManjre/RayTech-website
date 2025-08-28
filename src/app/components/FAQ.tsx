// components/FAQ.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import type { FC, ReactNode } from 'react';

// Define the data structure and content
interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Which businesses do you work with?",
    answer: "We support small and medium businesses across retail, healthcare, finance, and more. Our solutions are always customized to fit your unique needs and challenges."
  },
  {
    question: "How long does a project typically take?",
    answer: "A standard project, like a new website, usually takes between 4 to 8 weeks from our initial consultation to launch. We provide a detailed project timeline after the discovery phase."
  },
  {
    question: "Can you integrate with my current tools?",
    answer: "Yes, absolutely. We specialize in integrating our custom solutions with your existing systems (like CRMs, accounting software, and marketing platforms) to ensure a smooth and unified workflow."
  },
  {
    question: "What happens during a free consultation?",
    answer: "Our free consultation is a no-pressure discovery session. We'll listen to your challenges, assess your current technology stack, and discuss potential solutions and strategies to help you modernize and grow."
  }
];


const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first item to be open

  return (
    <section className="bg-black text-white py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Answers to Your Top Questions
          </h2>
          <p className="text-lg text-slate-400">
            Quick info on our services, process, and how we can help your business succeed.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, idx) => (
            <AccordionItem
              key={idx}
              question={item.question}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {item.answer}
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
};


// --- Reusable AccordionItem Sub-Component ---

interface AccordionItemProps {
  question: string;
  children: ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: FC<AccordionItemProps> = ({ question, children, isOpen, onClick }) => {
  return (
    <div className="bg-slate-900/80 rounded-lg border border-slate-700 overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-5 text-left font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg text-slate-100">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 flex-shrink-0" /> : <Plus className="w-5 h-5 flex-shrink-0" />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-slate-400">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;