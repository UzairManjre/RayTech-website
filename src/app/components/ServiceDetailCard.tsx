import React from 'react';

interface ServiceDetailCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceDetailCard: React.FC<ServiceDetailCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-green-500 mb-4 w-10 h-10">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default ServiceDetailCard;
