import Link from 'next/link';

interface PageHeroProps {
  title: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title }) => {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto flex flex-col items-center justify-center px-6 py-32 md:py-40 text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          {title}
        </h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/contact"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md transition-colors text-lg"
          >
            Book now
          </Link>
          <Link
            href="/services/all-services"
            className="bg-transparent border-2 border-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-md transition-colors text-lg"
          >
            See services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
