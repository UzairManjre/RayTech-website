const sectors = [
  "Finance and banking",
  "Healthcare",
  "Retail and e-commerce",
  "Manufacturing",
  "Logistics",
  "Professional services",
];

const TrustedBy = () => (
  <section className="bg-white py-16">
    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-gray-900">Trusted by top tech-driven sectors</h2>
        <p className="text-gray-600 mb-6">We empower organizations across industries to modernize, automate, and grow with confidence.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {sectors.map((sector) => (
          <div key={sector} className="bg-gray-50 rounded-lg shadow p-4 text-center text-gray-800 font-body font-semibold text-sm">
            {sector}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy;