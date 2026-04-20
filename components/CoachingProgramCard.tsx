import React from 'react';

interface CoachingProgramCardProps {
  title: string;
  description: string;
  timeAllocation: string;
  impactModel: string;
}

const CoachingProgramCard: React.FC<CoachingProgramCardProps> = ({ title, description, timeAllocation, impactModel }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
      <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <h4 className="text-lg font-semibold text-blue-600">Time Allocation:</h4>
      <p className="text-gray-600 mb-4">{timeAllocation}</p>
      <h4 className="text-lg font-semibold text-blue-600">Impact Model:</h4>
      <p className="text-gray-600">{impactModel}</p>
    </div>
  );
};

export default CoachingProgramCard;