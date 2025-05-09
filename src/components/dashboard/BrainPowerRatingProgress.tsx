// components/BrainpowerCard.tsx
import React from "react";

interface BrainpowerCardProps {
  percentage: number;
  size?: number;
}

const BrainpowerCard: React.FC<BrainpowerCardProps> = ({
  percentage,
  size = 100,
}) => {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI;
  const progress = percentage / 100;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center">
      <h3 className="text-gray-600 mb-3">Rating</h3>
      <div className="relative" style={{ width: size, height: size / 2 }}>
        <svg viewBox={`0 0 ${size} ${size / 2}`} className="w-full h-full">
          <path
            d={`M ${strokeWidth / 2} ${size / 2} 
                A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${
              size / 2
            }`}
            fill="transparent"
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
          />
          <path
            d={`M ${strokeWidth / 2} ${size / 2} 
                A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${
              size / 2
            }`}
            fill="transparent"
            stroke="#3B82F6"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 text-center">
          <span className="text-xl font-bold text-gray-800">{percentage}%</span>
        </div>
      </div>
      <span className="text-sm text-gray-500 mt-2">Brainpower</span>
    </div>
  );
};

export default BrainpowerCard;
