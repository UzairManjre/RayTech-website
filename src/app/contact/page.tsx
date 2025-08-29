// app/booking/page.tsx (or your booking page file)
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Calendar, Edit3, CheckCircle, AlertTriangle, Loader } from 'lucide-react';
import type { FC, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

// You can keep these components in separate files if you prefer
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BookingPage: FC = () => {
  // --- Form State Management ---
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: '',
    details: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.fullName,
          email: form.email,
          message: `Company: ${form.companyName || '-'}\nPhone: ${form.phone || '-'}\nService: ${form.service || '-'}\nDetails: ${form.details}`,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess('Consultation booked! We will be in touch shortly.');
        setForm({ fullName: '', companyName: '', email: '', phone: '', service: '', details: '' });
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-black">
      <Navbar />
      <section className="relative overflow-hidden">
        {/* Aurora Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(22,163,74,0.1),_transparent_30%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Let's Build Your Future, Together.
            </h1>
            <p className="text-lg text-slate-400">
              Book a free, no-obligation consultation. Tell us about your project, and we'll tell you how we can help.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side: Form */}
            <motion.form
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-black/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-8 w-full"
              onSubmit={handleSubmit}
            >
              <FloatingLabelInput id="fullName" name="fullName" type="text" label="Full Name*" value={form.fullName} onChange={handleChange} required disabled={loading} />
              <FloatingLabelInput id="companyName" name="companyName" type="text" label="Company Name" value={form.companyName} onChange={handleChange} disabled={loading} />
              <FloatingLabelInput id="email" name="email" type="email" label="Email Address*" value={form.email} onChange={handleChange} required disabled={loading} />
              <FloatingLabelInput id="phone" name="phone" type="tel" label="Phone Number" value={form.phone} onChange={handleChange} disabled={loading} />
              <FloatingLabelSelect id="service" name="service" label="Service of Interest" value={form.service} onChange={handleChange} disabled={loading}>
                <option value="">Select a service</option>
                <option value="web-app">Web & App Development</option>
                <option value="custom-software">Custom Software</option>
                <option value="ecommerce">E-commerce</option>
                <option value="general">General Inquiry</option>
              </FloatingLabelSelect>
              <FloatingLabelTextarea id="details" name="details" label="Project Details*" value={form.details} onChange={handleChange} required disabled={loading} />
              
              <AnimatePresence>
                {success && <FormFeedback type="success" message={success} />}
                {error && <FormFeedback type="error" message={error} />}
              </AnimatePresence>

              <button type="submit" className="w-full flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-opacity disabled:opacity-60 disabled:cursor-not-allowed" disabled={loading}>
                {loading ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}><Loader /></motion.div> : 'Book Free Consultation'}
              </button>
            </motion.form>

            {/* Right Side: What to Expect */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white lg:mt-4"
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-100">What to Expect</h2>
              <div className="relative pl-8 border-l-2 border-slate-700 space-y-12">
                <TimelineStep icon={<Edit3 />} title="Step 1: Submit the Form" description="Provide us with the details of your project or inquiry." />
                <TimelineStep icon={<Mail />} title="Step 2: We'll Reach Out" description="Our team will email you within 24 hours to schedule a convenient time for our call." />
                <TimelineStep icon={<Calendar />} title="Step 3: 30-Min Discovery Call" description="A free, no-obligation call to discuss your goals and how we can help you achieve them." />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

// --- Reusable Sub-Components ---

const TimelineStep: FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="relative">
    <div className="absolute -left-[33px] top-1 h-8 w-8 bg-slate-800 border-2 border-slate-700 rounded-full flex items-center justify-center text-green-400">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-slate-400 mt-1">{description}</p>
  </div>
);

const FormFeedback: FC<{ type: 'success' | 'error'; message: string }> = ({ type, message }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
    className={`flex items-center gap-2 mb-4 font-semibold p-3 rounded-md ${
      type === 'success' ? 'text-green-400 bg-green-500/10' : 'text-red-400 bg-red-500/10'
    }`}
  >
    {type === 'success' ? <CheckCircle size={18} /> : <AlertTriangle size={18} />}
    {message}
  </motion.div>
);

// --- Reusable Form Inputs (as seen before) ---

type FloatingLabelInputProps = InputHTMLAttributes<HTMLInputElement> & { label: string };
const FloatingLabelInput: FC<FloatingLabelInputProps> = ({ id, label, ...props }) => (
    <div className="relative mb-8">
      <input id={id} placeholder=" " className="peer block w-full appearance-none border-0 border-b-2 border-slate-600 bg-transparent py-2.5 px-0 text-white focus:border-green-400 focus:outline-none focus:ring-0" {...props} />
      <label htmlFor={id} className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-slate-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-400">{label}</label>
    </div>
);
type FloatingLabelTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string };
const FloatingLabelTextarea: FC<FloatingLabelTextareaProps> = ({ id, label, ...props }) => (
    <div className="relative mb-8">
      <textarea id={id} placeholder=" " rows={3} className="peer block w-full appearance-none border-0 border-b-2 border-slate-600 bg-transparent py-2.5 px-0 text-white focus:border-green-400 focus:outline-none focus:ring-0" {...props} />
      <label htmlFor={id} className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-slate-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-400">{label}</label>
    </div>
);
type FloatingLabelSelectProps = SelectHTMLAttributes<HTMLSelectElement> & { label: string };
const FloatingLabelSelect: FC<FloatingLabelSelectProps> = ({ id, label, children, ...props }) => (
  <div className="relative mb-8">
      <select id={id} className="peer block w-full appearance-none border-0 border-b-2 border-slate-600 bg-transparent py-2.5 px-0 text-white focus:border-green-400 focus:outline-none focus:ring-0 [&>option]:bg-slate-900" {...props}>
        {children}
      </select>
      <label htmlFor={id} className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-slate-400 duration-300 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-400">{label}</label>
  </div>
);

export default BookingPage;