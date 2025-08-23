import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import FinalCTA from '@/app/components/FinalCTA';
import PageHero from '@/app/components/PageHero';
import { FiMonitor, FiShoppingCart, FiRefreshCw, FiSmartphone, FiBarChart2, FiShare2, FiFileText, FiArchive, FiUsers, FiTrendingUp, FiClipboard, FiCalendar, FiAward, FiGrid, FiMessageSquare, FiLifeBuoy } from 'react-icons/fi';

const serviceCategories = [
  {
    title: 'Web & Mobile Presence',
    services: [
      { icon: <FiMonitor size={36} color="#22c55e" />, title: 'Professional Business Website', description: `We build clean, fast, and mobile-friendly websites to be your business's online identity.` },
      { icon: <FiShoppingCart size={36} color="#22c55e" />, title: 'Online Store Setup (E-commerce)', description: 'Start selling your products online with a secure and easy-to-use digital store.' },
      { icon: <FiRefreshCw size={36} color="#22c55e" />, title: 'Website Redesign & Modernization', description: 'We can update your old, outdated website to make it look modern and work on all devices.' },
      { icon: <FiSmartphone size={36} color="#22c55e" />, title: 'Android & iOS Mobile App Development', description: 'Create a dedicated mobile app to connect directly with your customers.' },
      { icon: <FiBarChart2 size={36} color="#22c55e" />, title: 'Basic SEO Setup', description: 'Help customers find your business on Google when they search for services you offer.' },
      { icon: <FiShare2 size={36} color="#22c55e" />, title: 'Social Media Integration', description: 'Connect your website with your Facebook, Instagram, and WhatsApp for seamless marketing.' },
    ],
  },
  {
    title: 'Custom Business Software',
    services: [
      { icon: <FiFileText size={36} color="#22c55e" />, title: 'Custom Billing & Invoicing Software', description: 'Simplify your accounting with software built just for the way you do business.' },
      { icon: <FiArchive size={36} color="#22c55e" />, title: 'Inventory Management Systems', description: 'Keep track of your stock automatically, so you know exactly what you have and what you need.' },
      { icon: <FiUsers size={36} color="#22c55e" />, title: 'Simple Customer Management (CRM)', description: 'Keep all your customer information organized in one place to provide better service.' },
      { icon: <FiTrendingUp size={36} color="#22c55e" />, title: 'Custom Business Reporting Dashboards', description: 'Get a simple, one-page view of your most important business data, updated automatically.' },
      { icon: <FiClipboard size={36} color="#22c55e" />, title: 'Simple Employee Management Portals', description: 'A private online system for your staff to mark attendance, request leave, and view announcements.' },
    ],
  },
  {
    title: 'Customer Engagement & Operations',
    services: [
      { icon: <FiCalendar size={36} color="#22c55e" />, title: 'Appointment & Booking Systems', description: 'Perfect for doctors, salons, and consultants to let customers book their slots online.' },
      { icon: <FiAward size={36} color="#22c55e" />, title: 'Digital Loyalty & Coupon Systems', description: 'Create simple digital coupon codes or a loyalty point system to encourage repeat business.' },
      { icon: <FiGrid size={36} color="#22c55e" />, title: 'Digital QR Code Menus & Catalogs', description: 'A modern, touch-free way for restaurants and shops to display their offerings.' },
    ],
  },
  {
    title: 'Strategy & Support',
    services: [
      { icon: <FiMessageSquare size={36} color="#22c55e" />, title: 'Technology Consultation', description: `Not sure what you need? We'll sit with you, understand your business, and suggest the right solution for free.` },
      { icon: <FiLifeBuoy size={36} color="#22c55e" />, title: 'Technical Support & Maintenance', description: `We keep your website and software running smoothly so you don't have to worry about it.` },
    ],
  },
];

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center h-full">
    <span className="mb-4 block">{icon}</span>
    <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);


export default function AllServicesPage() {
  return (
    <div>
      <Navbar />
      {/* Custom hero without the See services button */}
      <section className="bg-black text-white">
        <div className="container mx-auto flex flex-col items-center justify-center px-6 py-32 md:py-40 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Our Full Service Catalog
          </h1>
        </div>
      </section>
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            A complete look at the digital solutions we build to help your business grow.
          </p>
          {serviceCategories.map((cat) => (
            <div key={cat.title} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">{cat.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.services.map((svc) => (
                  <ServiceCard key={svc.title} {...svc} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <FinalCTA />
      <Footer />
    </div>
  );
}
