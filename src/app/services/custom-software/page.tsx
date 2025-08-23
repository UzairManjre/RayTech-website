import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import FinalCTA from '@/app/components/FinalCTA';
import PageHero from '@/app/components/PageHero';
import ServiceDetailCard from '@/app/components/ServiceDetailCard';
import Image from 'next/image';
import { FaChartLine, FaBug, FaChartBar, FaExpand } from 'react-icons/fa';

export default function CustomSoftwarePage() {
  return (
    <div>
      <Navbar />
      <PageHero title="Software That Works The Way You Do" />

      {/* Problem/Solution Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Escape the Limits of Off-the-Shelf Software</h2>
            <p className="text-gray-700 text-lg">
              Generic software often forces businesses to change their processes, creating inefficiencies and frustration. Custom software is built around your unique workflow, eliminating bottlenecks and filling the exact gaps that off-the-shelf products can't. Get a solution that fits your business, not the other way around.
            </p>
          </div>
          <div className="flex justify-center">
            <Image src="/Images/feather/code.svg" alt="Custom Software" width={320} height={220} className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Examples of What We Can Build For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceDetailCard
              icon={<Image src="/Images/feather/dollar-sign.svg" alt="Billing" width={40} height={40} />}
              title="Custom Billing & Invoicing"
              description="Automate your finances, reduce manual errors, and get paid faster with a system built for your specific business model."
            />
            <ServiceDetailCard
              icon={<Image src="/Images/feather/box.svg" alt="Inventory" width={40} height={40} />}
              title="Inventory Management Systems"
              description="Get real-time stock tracking, low-level alerts, and sales data to eliminate guesswork and optimize your supply chain."
            />
            <ServiceDetailCard
              icon={<Image src="/Images/feather/users.svg" alt="CRM" width={40} height={40} />}
              title="Customer Relationship Management (CRM)"
              description="Build a simple, powerful CRM to manage your leads, track all customer interactions, and provide exceptional service."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">The Tangible Benefits</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow p-6">
              <span className="mb-3 block"><FaChartLine size={36} color="#22c55e" /></span>
              <h3 className="font-semibold text-lg mb-1">Increase Efficiency</h3>
              <p className="text-gray-600 text-sm">Automate repetitive tasks and streamline your workflow.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow p-6">
              <span className="mb-3 block"><FaBug size={36} color="#22c55e" /></span>
              <h3 className="font-semibold text-lg mb-1">Reduce Human Error</h3>
              <p className="text-gray-600 text-sm">Minimize mistakes with tailored, reliable systems.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow p-6">
              <span className="mb-3 block"><FaChartBar size={36} color="#22c55e" /></span>
              <h3 className="font-semibold text-lg mb-1">Gain Actionable Insights</h3>
              <p className="text-gray-600 text-sm">Get real-time data and analytics to drive better decisions.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white rounded-lg shadow p-6">
              <span className="mb-3 block"><FaExpand size={36} color="#22c55e" /></span>
              <h3 className="font-semibold text-lg mb-1">Scales With Your Business</h3>
              <p className="text-gray-600 text-sm">Flexible solutions that grow as your business does.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Built With Modern, Reliable Technology</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Image src="/Images/svgs/python-.svg" alt="Python" width={80} height={80} />
            <Image src="/Images/svgs/nodejs.svg" alt="Node.js" width={80} height={80} />
            <Image src="/Images/svgs/react-svgrepo-com.svg" alt="React" width={80} height={80} />
            <Image src="/Images/svgs/aws.svg" alt="AWS" width={80} height={80} />
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}
