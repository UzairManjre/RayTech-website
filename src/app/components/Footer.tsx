'use client';
import Link from 'next/link';


const socialLinks = [
  { href: 'https://twitter.com', label: 'Twitter', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z" /></svg>
  ) },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" /></svg>
  ) },
  { href: 'https://facebook.com', label: 'Facebook', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.68 0h-21.36c-.73 0-1.32.59-1.32 1.32v21.36c0 .73.59 1.32 1.32 1.32h11.49v-9.29h-3.13v-3.62h3.13v-2.67c0-3.1 1.89-4.79 4.65-4.79 1.32 0 2.45.1 2.78.14v3.22h-1.91c-1.5 0-1.79.71-1.79 1.75v2.35h3.58l-.47 3.62h-3.11v9.29h6.09c.73 0 1.32-.59 1.32-1.32v-21.36c0-.73-.59-1.32-1.32-1.32z" /></svg>
  ) },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Glassmorphism background effect */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="w-full h-full bg-gradient-to-tr from-green-500/10 via-gray-900/80 to-green-600/10 blur-2xl opacity-80" />
      </div>
      <div className="relative container mx-auto px-6 py-16">
        {/* Part 1: Form Section */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">Ready to Build Something Great?</h2>
          <p className="text-gray-400 mb-8 text-lg">Leave your details and we'll get in touch to schedule a free consultation.</p>
          {/* Footer Inquiry Form with submission logic */}
          {(() => {
            const React = require('react');
            type FormState = { name: string; email: string };
            const [form, setForm] = React.useState({ name: '', email: '' });
            const [loading, setLoading] = React.useState(false);
            const [success, setSuccess] = React.useState(null);
            const [error, setError] = React.useState(null);

            const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              const { name, value } = e.target;
              setForm((prev: FormState) => ({ ...prev, [name]: value }));
            };

            const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              setLoading(true);
              setSuccess(null);
              setError(null);
              try {
                const res = await fetch('/api/send-email', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ name: form.name, email: form.email, message: 'Footer inquiry' }),
                });
                const data = await res.json();
                if (res.ok && data.success) {
                  setSuccess('Thank you! We will contact you soon.');
                  setForm({ name: '', email: '' });
                } else {
                  setError(data.error || 'Something went wrong. Please try again.');
                }
              } catch (err) {
                setError('Network error. Please try again.');
              } finally {
                setLoading(false);
              }
            };

            return (
              <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto bg-gray-800/70 rounded-2xl shadow-lg p-4 md:p-2 backdrop-blur-md" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full md:w-1/3 bg-gray-800 border border-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  required
                  value={form.name}
                  onChange={handleChange}
                  disabled={loading}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full md:w-1/3 bg-gray-800 border border-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  required
                  value={form.email}
                  onChange={handleChange}
                  disabled={loading}
                />
                <button
                  type="submit"
                  className="w-full md:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Inquiry'}
                </button>
                {success && <div className="w-full text-green-400 text-center font-semibold mt-2">{success}</div>}
                {error && <div className="w-full text-red-400 text-center font-semibold mt-2">{error}</div>}
              </form>
            );
          })()}
        </div>

        <hr className="border-gray-700 my-10" />

        {/* Part 2: Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-extrabold tracking-tight mb-1">RayTechnica</h3>
            <p className="text-gray-400 text-sm mb-2">Vadodara, Gujarat</p>
            <div className="flex space-x-4 mt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-12 gap-6 md:gap-0">
            <div className="flex flex-col space-y-2">
              <span className="uppercase text-gray-400 text-xs font-semibold mb-2 tracking-widest">Navigation</span>
              <Link href="/services" className="hover:text-green-400 transition-colors">Services</Link>
              <Link href="/about" className="hover:text-green-400 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col space-y-2 mt-6 md:mt-0">
              <span className="uppercase text-gray-400 text-xs font-semibold mb-2 tracking-widest">Contact</span>
              <span className="text-gray-300">contact@raytechnica.work</span>
              <span className="text-gray-400">Mumbai, India</span>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} RayTechnica. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;