import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Smart tech for business growth</h2>
          <p className="text-gray-600 mt-4">Discover our core services to help your business streamline processes and improve efficiency.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
            imageUrl="/Images/Home/app and web dev ppl.avif"
            title="Website & app development"
            description="Responsive sites and apps to modernize your business and boost your online presence."
            href="/services/web-app-development"
          />
          <ServiceCard
            imageUrl="/Images/Home/crm soft.avif"
            title="Custom software solutions"
            description="Automate billing, track inventory, and manage CRM with tailored software."
            href="/services/custom-software"
          />
           {/* You can add more cards here */}
        </div>
      </div>
    </section>
  );
};

export default Services;
