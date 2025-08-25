// components/ContactSection.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Loader, CheckCircle, AlertTriangle } from 'lucide-react';
import type { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

const ContactSection: FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '', privacy: false });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    setForm((prev) => ({
      ...prev,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }));
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
  body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
});

const data = await res.json();
if (res.ok && data.success) {
  setSuccess('Thank you! Your message has been sent.');
  setForm({ name: '', email: '', message: '', privacy: false });
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
    <section className="relative bg-black text-white py-20 md:py-24 overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-[radial-gradient(circle_at_center,_rgba(22,163,74,0.15),_transparent_40%)]" />

      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Contact Info */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Start Your Project Today
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-lg">
            Ready to bring your vision to life? Contact us to discuss your needs or book a complimentary consultation.
          </p>
          <ul className="space-y-6">
            <li className="flex items-center gap-4 text-lg">
              <Mail className="text-green-400" size={22} />
              <span className="text-slate-300">contact@raytech.com</span>
            </li>
            <li className="flex items-center gap-4 text-lg">
              <Phone className="text-green-400" size={22} />
              <span className="text-slate-300">+91 82001 16005</span>
            </li>
          </ul>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 w-full"
          onSubmit={handleSubmit}
        >
          <FloatingLabelInput id="name" name="name" type="text" label="Your Name" value={form.name} onChange={handleChange} required disabled={loading} />
          <FloatingLabelInput id="email" name="email" type="email" label="Your Email" value={form.email} onChange={handleChange} required disabled={loading} />
          <FloatingLabelTextarea id="message" name="message" label="Your Message" value={form.message} onChange={handleChange} required disabled={loading} />
          
          <div className="flex items-center mb-6">
            <input id="privacy" name="privacy" type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-green-500 focus:ring-green-500" required checked={form.privacy} onChange={handleChange} disabled={loading} />
            <label htmlFor="privacy" className="ml-2 block text-sm text-slate-400">I agree to the privacy policy.</label>
          </div>
          
          <AnimatePresence>
            {success && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-2 mb-4 text-green-400 font-semibold p-3 bg-green-500/10 rounded-md">
                <CheckCircle size={18} /> {success}
              </motion.div>
            )}
            {error && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-2 mb-4 text-red-400 font-semibold p-3 bg-red-500/10 rounded-md">
                <AlertTriangle size={18} /> {error}
              </motion.div>
            )}
          </AnimatePresence>
          
          <button type="submit" className="w-full flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-opacity disabled:opacity-60 disabled:cursor-not-allowed" disabled={loading}>
            {loading ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}><Loader /></motion.div> : 'Submit Message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

// --- Reusable Floating Label Input ---
type FloatingLabelInputProps = InputHTMLAttributes<HTMLInputElement> & { label: string };
const FloatingLabelInput: FC<FloatingLabelInputProps> = ({ id, label, ...props }) => {
  return (
    <div className="relative mb-6">
      <input id={id} placeholder=" " className="peer block w-full appearance-none border-0 border-b-2 border-slate-600 bg-transparent py-2.5 px-0 text-white focus:border-green-400 focus:outline-none focus:ring-0" {...props} />
      <label htmlFor={id} className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-slate-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-400">
        {label}
      </label>
    </div>
  );
};

// --- Reusable Floating Label Textarea ---
type FloatingLabelTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string };
const FloatingLabelTextarea: FC<FloatingLabelTextareaProps> = ({ id, label, ...props }) => {
  return (
    <div className="relative mb-6">
      <textarea id={id} placeholder=" " rows={4} className="peer block w-full appearance-none border-0 border-b-2 border-slate-600 bg-transparent py-2.5 px-0 text-white focus:border-green-400 focus:outline-none focus:ring-0" {...props} />
      <label htmlFor={id} className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-slate-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-400">
        {label}
      </label>
    </div>
  );
};

export default ContactSection;