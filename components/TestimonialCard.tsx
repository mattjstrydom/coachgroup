import React from 'react';

interface TestimonialCardProps {
  name: string;
  quote: string;
  position?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, quote, position }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
      <p className="text-gray-700 italic">"{quote}"</p>
      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
        {position && <p className="text-sm text-gray-500">{position}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;