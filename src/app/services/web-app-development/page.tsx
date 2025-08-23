
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import {
  ChevronRight,
  Code,
  ShoppingBag,
  Smartphone,
  PenTool,
} from "lucide-react";
import Image from "next/image";
import FinalCTA from "@/app/components/FinalCTA";

const WebAppDevelopmentPage = () => {
  return (
    <div>
      <Navbar />
      <PageHero
        title="Crafting Your Digital Front Door"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              In 2025, Your Digital Presence is Your Business
            </h2>
            <p className="text-gray-600 leading-relaxed">
              For customers today, a business without a professional website or
              app often doesn't exist. It's the primary tool for building
              trust, reaching new markets, and serving clients 24/7.
            </p>
          </div>
          <div>
            <Image
              src="/Images/home/webappdevelopment.png"
              alt="Website & App Development"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Proven Development Process
          </h2>
          <div className="relative">
            {/* Grey line is now behind and only between the process steps, not through text */}
            {/* <div className="hidden md:block absolute left-0 right-0 top-1/2 h-0.5 bg-gray-300 z-0" style={{transform: 'translateY(-50%)'}}></div> */}
            <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 relative z-10">
              {/* Add image for visual enhancement on the left for desktop, top for mobile */}
              
              <div className="flex flex-col items-center text-center h-full">
                <div className="bg-white rounded-full p-4 shadow-md mb-4">
                  <PenTool className="text-green-500" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Discovery & Strategy
                </h3>
                <p className="text-gray-600 flex-1">
                  We start by understanding your business goals and target
                  audience to create a roadmap for success.
                </p>
              </div>
              <ChevronRight className="hidden md:block text-gray-400 self-center" />
              <div className="flex flex-col items-center text-center h-full">
                <div className="bg-white rounded-full p-4 shadow-md mb-4">
                  <Code className="text-green-500" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  UI/UX Design
                </h3>
                <p className="text-gray-600 flex-1">
                  We design intuitive and engaging interfaces that provide a
                  seamless user experience.
                </p>
              </div>
              <ChevronRight className="hidden md:block text-gray-400 self-center" />
              <div className="flex flex-col items-center text-center h-full">
                <div className="bg-white rounded-full p-4 shadow-md mb-4">
                  <Smartphone className="text-green-500" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Development & Testing
                </h3>
                <p className="text-gray-600 flex-1">
                  Our expert developers bring the designs to life using the
                  latest technologies and agile methodologies.
                </p>
              </div>
              <ChevronRight className="hidden md:block text-gray-400 self-center" />
              <div className="flex flex-col items-center text-center h-full">
                <div className="bg-white rounded-full p-4 shadow-md mb-4">
                  <ShoppingBag className="text-green-500" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Launch & Support
                </h3>
                <p className="text-gray-600 flex-1">
                  We deploy your application and provide ongoing support to
                  ensure it runs smoothly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What We Build to Help You Succeed
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <Image src="/Images/feather/monitor.svg" alt="Responsive Websites" width={64} height={64} className="mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Responsive Websites
            </h3>
            <p className="text-gray-600">
              Engage customers on any device, from desktop to mobile.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <Image src="/Images/feather/shopping-cart.svg" alt="E-commerce Stores" width={64} height={64} className="mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              E-commerce Stores
            </h3>
            <p className="text-gray-600">
              Turn your website into a powerful sales engine.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <Image src="/Images/feather/smartphone.svg" alt="Mobile Apps (iOS & Android)" width={64} height={64} className="mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mobile Apps (iOS & Android)
            </h3>
            <p className="text-gray-600">
              Build loyalty and connect directly with your customers in their
              pocket.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <Image src="/Images/feather/grid.svg" alt="Content Management Systems (CMS)" width={64} height={64} className="mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Content Management Systems (CMS)
            </h3>
            <p className="text-gray-600">
              Empowering you to control and update your own content with ease.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Built With Modern, Reliable Technology
          </h2>
          <div className="flex justify-center items-center space-x-8">
            <Image
              src="/Images/svgs/react-svgrepo-com.svg"
              alt="React"
              width={100}
              height={100}
            />
            <Image
              src="/Images/svgs/nextjs.svg"
              alt="Next.js"
              width={100}
              height={100}
            />
            <Image
              src="/Images/svgs/typescript.svg"
              alt="TypeScript"
              width={100}
              height={100}
            />
            <Image
              src="/Images/svgs/tailwind.svg"
              alt="Tailwind CSS"
              width={100}
              height={100}
            />
            <Image
              src="/Images/svgs/vercel.svg"
              alt="Vercel"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default WebAppDevelopmentPage;
