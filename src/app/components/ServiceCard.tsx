import Image from 'next/image';

interface ServiceCardProps {
  imageUrl: string;
  title: string;
  description: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageUrl, title, description, href }) => {
  return (
    <div className="relative rounded-2xl shadow-xl overflow-hidden animate-fade-in bg-white/70 backdrop-blur-md border-2 border-transparent hover:border-green-400 transition-all duration-300 group">
      {/* Animated gradient border overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none rounded-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-300">
        <div className="w-full h-full bg-gradient-to-tr from-green-400/30 via-white/60 to-green-600/30 animate-gradient-x blur-lg" />
      </div>
      <Image src={imageUrl} alt={title} width={500} height={300} className="w-full object-cover rounded-t-2xl" />
      <div className="p-6 relative z-10">
  <h3 className="font-heading text-xl font-extrabold mb-2 text-gray-900 drop-shadow-lg">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={href} className="text-green-600 font-semibold relative group/link">
          <span className="group-hover/link:underline group-hover/link:decoration-green-400 transition-all">Learn more</span>
          <span className="block h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left duration-300" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
