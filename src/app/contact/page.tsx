import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';

const BookingHero = () => (
  <section className="bg-gray-50 py-16 md:py-24">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Build Your Future, Together.</h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
        Book a free, no-obligation consultation with our experts. Tell us about your project, and we'll tell you how we can help.
      </p>
    </div>
  </section>
);

const BookingForm = () => (
  <form className="bg-white rounded-xl shadow p-8 w-full max-w-lg mx-auto">
    <div className="mb-6">
      <label htmlFor="fullName" className="block text-sm font-semibold uppercase tracking-wider mb-2 text-gray-700">Full Name<span className="text-red-500">*</span></label>
      <input id="fullName" name="fullName" type="text" required className="w-full bg-white border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>
    <div className="mb-6">
      <label htmlFor="companyName" className="block text-sm font-semibold uppercase tracking-wider mb-2 text-gray-700">Company Name</label>
      <input id="companyName" name="companyName" type="text" className="w-full bg-white border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>
    <div className="mb-6">
      <label htmlFor="email" className="block text-sm font-semibold uppercase tracking-wider mb-2 text-gray-700">Email Address<span className="text-red-500">*</span></label>
      <input id="email" name="email" type="email" required className="w-full bg-white border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>
    <div className="mb-6">
      <label htmlFor="phone" className="block text-sm font-semibold uppercase tracking-wider mb-2 text-gray-700">Phone Number</label>
      <input id="phone" name="phone" type="tel" className="w-full bg-white border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>
    <div className="mb-6">
      <label htmlFor="service" className="block text-sm font-semibold uppercase tracking-wider mb-2 text-gray-700">Service of Interest</label>
      <select id="service" name="service" className="w-full bg-white border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500">
        <option value="">Select a service</option>
        <option value="web-app">Web & App Development</option>
        <option value="custom-software">Custom Software</option>
        <option value="ecommerce">E-commerce</option>
        <option value="general">General Inquiry</option>
      </select>
    </div>
    <div className="mb-6">
      <label htmlFor="details" className="block text-sm font-semibold uppercase tracking-wider mb-2 text-gray-700">Project Details<span className="text-red-500">*</span></label>
      <textarea id="details" name="details" required className="w-full bg-white border border-gray-300 rounded-md py-3 px-4 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>
    <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition-colors text-lg">Book Free Consultation</button>
  </form>
);

const BookingInfo = () => (
  <div className="w-full max-w-lg mx-auto md:mx-0 md:ml-12">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h2>
    <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
      <li>Fill out the form.</li>
      <li>We'll email you to schedule.</li>
      <li>We hold a 30-minute discovery call.</li>
    </ol>
    <div className="mb-2 flex items-center gap-2">
      <span className="inline-block text-green-500 font-bold text-xl">✓</span>
      <span className="text-gray-800">Completely Free</span>
    </div>
    <div className="mb-2 flex items-center gap-2">
      <span className="inline-block text-green-500 font-bold text-xl">✓</span>
      <span className="text-gray-800">Expert Advice</span>
    </div>
    <div className="mb-2 flex items-center gap-2">
      <span className="inline-block text-green-500 font-bold text-xl">✓</span>
      <span className="text-gray-800">No Obligations</span>
    </div>
  </div>
);

const BookingMain = () => (
  <section className="bg-gray-50 py-16 md:py-24">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start px-4">
      <BookingForm />
      <BookingInfo />
    </div>
  </section>
);

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <BookingHero />
      <BookingMain />
      <Footer />
    </main>
  );
}
