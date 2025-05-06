import { FC } from "react";

interface MilestoneCardProps {
  subject: string;
  nextTask: string;
  progress: number;
  message: string;
  daysLeft: number;
  bgColor: string;
  badgeColor: string;
}

const MilestoneCard: FC<MilestoneCardProps> = ({
  subject,
  nextTask,
  progress,
  message,
  daysLeft,
  bgColor,
  badgeColor,
}) => {
  return (
    <div className={`rounded-2xl p-4 w-full max-w-sm ${bgColor}`}>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-semibold text-lg">Reading - {subject}</h3>
          <p className="text-sm text-gray-600">Next: {nextTask}</p>
        </div>
        <div className="flex space-x-1 mt-1">
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center space-x-2 text-sm mb-1">
          <span role="img" aria-label="icon">🧠</span>
          <span className="text-gray-700 font-medium">Progress</span>
        </div>
        <div className="w-full bg-purple-100 h-2 rounded-full overflow-hidden mt-1">
          <div
            className="bg-purple-400 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-sm text-right mt-1 font-medium">{progress}%</div>
      </div>

      <div className="mt-4 text-sm flex justify-between items-center">
        <span className="text-gray-800">{message}</span>
        <span
          className={`text-white text-xs px-3 py-1 rounded-full ${badgeColor}`}
        >
          {daysLeft} days left
        </span>
      </div>
    </div>
  );
};

export default MilestoneCard;
