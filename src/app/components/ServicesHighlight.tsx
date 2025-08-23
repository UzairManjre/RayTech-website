import Image from 'next/image';

const services = [
  {
    title: 'Website & app development',
    description: 'Modern, responsive sites and apps to boost your online presence.',
    image: '/Images/Home/app and web dev ppl.avif', // group of people working on app/web
  },
  {
    title: 'Custom software solutions',
    description: 'Tailored business software for productivity and growth.',
    image: '/Images/Home/crm soft.avif', // CRM software UI
  },
  {
    title: 'E-commerce platforms',
    description: 'Robust, scalable online stores for your business.',
    image: '/Images/Home/ecom photo.avif', // e-commerce photo
  },
  {
    title: 'Business automation tools',
    description: 'Automate workflows and save time with smart tools.',
    image: '/Images/Home/monitor char.avif', // monitor with code/automation
  },
];

const ServicesHighlight = () => (
  <section className="bg-gray-50 py-16">
    <div className="container">
  <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-gray-900">Modern solutions for business growth</h2>
      <p className="text-gray-600 mb-10 max-w-2xl">Discover our core services to help your business streamline processes, improve efficiency, and embrace digital transformation.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="mb-4 w-full h-40 relative">
              <Image src={service.image} alt={service.title} fill className="object-cover rounded-lg" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-2 text-gray-900">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesHighlight;