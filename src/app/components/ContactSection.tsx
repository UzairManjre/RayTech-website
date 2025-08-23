'use client';
import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';


const ContactSection = () => {
  const [form, setForm] = React.useState({ name: '', email: '', message: '', privacy: false });
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    let fieldValue: string | boolean = value;
    if (type === 'checkbox') {
      fieldValue = (e.target as HTMLInputElement).checked;
    }
    setForm((prev) => ({
      ...prev,
      [name]: fieldValue,
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
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left: Contact Form */}
        <form className="bg-white rounded-xl shadow p-8 w-full" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold uppercase tracking-wider mb-2 text-gray-700">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full bg-white border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              value={form.name}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold uppercase tracking-wider mb-2 text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="email@website.com"
              className="w-full bg-white border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              value={form.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold uppercase tracking-wider mb-2 text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message..."
              className="w-full bg-white border border-gray-300 rounded-md py-3 px-4 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              value={form.message}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div className="flex items-center mb-6">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              className="mr-2 accent-green-500"
              required
              checked={form.privacy}
              onChange={handleChange}
              disabled={loading}
            />
            <label htmlFor="privacy" className="text-sm text-gray-700">I agree to the privacy policy.</label>
          </div>
          {success && <div className="mb-4 text-green-600 font-semibold">{success}</div>}
          {error && <div className="mb-4 text-red-600 font-semibold">{error}</div>}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
        {/* Right: Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-gray-900">Start your project today</h2>
          <p className="text-gray-600 mb-8">Contact us to discuss your needs or book a free consultation.</p>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <FaEnvelope className="text-gray-600" size={20} />
              <span className="text-gray-800">contact@raytech.com</span>
            </li>
            <li className="flex items-center gap-4">
              <FaPhoneAlt className="text-gray-600" size={20} />
              <span className="text-gray-800">+91 8200116005</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;