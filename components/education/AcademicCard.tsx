// components/AcademicCard.tsx

import React from 'react';

interface AcademicCardProps {
  title: string;
  institution: string;
  date?: string;
  location?: string;
   icon?: React.ReactNode;
}

const AcademicCard: React.FC<AcademicCardProps> = ({ title, institution, date, location, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 border-l-4 border-blue-600 cursor-pointer hover:bg-gray-100">
         <div className="text-blue-600 mt-1">{icon}</div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{institution}</p>
      {location && <p className="text-sm text-gray-500">{location}</p>}
      {date && <p className="text-sm text-gray-400 mt-1">{date}</p>}
    </div>
  
  );
};

export default AcademicCard;
