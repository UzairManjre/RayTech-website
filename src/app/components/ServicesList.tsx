import ServiceDetailCard from './ServiceDetailCard';
import { FiLayout, FiSettings, FiShoppingCart, FiLifeBuoy } from 'react-icons/fi';

const ServicesList = () => {
  return (
    <section id="services-list" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
            Modern solutions for business growth
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ServiceDetailCard
            icon={<FiLayout size={40} />}
            title="Website & app development"
            description="Build fast, secure, and scalable digital platforms tailored to your business needs. Enhance your online presence and streamline user experiences."
          />
          <ServiceDetailCard
            icon={<FiSettings size={40} />}
            title="Custom software solutions"
            description="Automate workflows with bespoke software for billing, inventory, and CRM. Improve efficiency and gain full control over your business operations."
          />
          <ServiceDetailCard
            icon={<FiShoppingCart size={40} />}
            title="E-commerce platforms"
            description="Launch robust online stores with seamless payment integration and inventory management. Drive sales and manage your products with ease."
          />
          <ServiceDetailCard
            icon={<FiLifeBuoy size={40} />}
            title="Ongoing support & optimization"
            description="Receive continuous technical support and performance enhancements. Keep your systems running smoothly as your business evolves."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
