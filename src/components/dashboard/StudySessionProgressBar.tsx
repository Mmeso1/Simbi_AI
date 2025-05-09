// components/StudySessionCard.tsx
import React from "react";

interface StudySessionCardProps {
  current: number;
  total?: number;
  size?: number;
}

const StudySessionCard: React.FC<StudySessionCardProps> = ({
  current,
  total = 5,
  size = 80,
}) => {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = current / total;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center">
      <h3 className="text-gray-600 mb-3">Study Session</h3>
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#10B981"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-800">
            {current.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudySessionCard;
