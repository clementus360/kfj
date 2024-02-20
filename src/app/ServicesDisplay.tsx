"use client"

import React, { useState } from 'react';

const ServiceItem = ({ number, title, description }: { number: number; title: string; description: string }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`border border-gray-300 p-4 rounded-md flex flex-col md:flex-row items-start md:items-center mb-4 overflow-hidden transition-all duration-500 ${
        expanded ? 'h-auto' : 'h-20'
      }`}
      onClick={toggleExpanded}
    >
      <div className="bg-green-600 bg-opacity-50 w-8 h-8 flex items-center justify-center rounded-lg text-white font-bold text-sm md:text-lg mr-4 md:mr-6 mb-4 md:mb-0">
        <span>{number}</span>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className={`${expanded ? 'block' : 'hidden'}`}>{description}</p>
      </div>
    </div>
  );
};

export const ServicesDisplay = () => {
  const services = [
    {
      title: 'Real Estate Sales',
      description: 'Assisting clients in buying and selling properties.',
    },
    {
      title: 'Real Estate Management',
      description: 'Offering property management services including leasing and maintenance.',
    },
    {
      title: 'Car Sales and Purchases',
      description: 'Facilitating the buying and selling of vehicles.',
    },
    {
      title: 'Car Rental Services',
      description: 'Providing rental vehicles for short and long-term use.',
    },
    {
      title: 'Legal and Documentation Support',
      description: 'Assisting with legal paperwork and documentation for real estate transactions.',
    },
    {
      title: 'Marketing and Advertising',
      description: 'Promoting properties through various marketing channels.',
    },
    {
      title: 'Customer Support',
      description: 'Providing assistance for inquiries and issues.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Real Estate Services</h2>
      <div className="space-y-4">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            number={index + 1}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};