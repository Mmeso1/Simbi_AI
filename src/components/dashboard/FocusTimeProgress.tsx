// components/FocusTimeCard.tsx
import React from "react";

interface FocusTimeCardProps {
  value: string | number;
}

const FocusTimeCard: React.FC<FocusTimeCardProps> = ({ value }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="text-gray-600 mb-2">Focus Time</h3>
      <span className="text-3xl font-bold text-gray-800 block text-center">
        {typeof value === "number" ? value.toString().padStart(2, "0") : value}
      </span>
    </div>
  );
};

export default FocusTimeCard;
