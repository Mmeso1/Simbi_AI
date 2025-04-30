import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import DashboardHeaders from "./DashboardHeaders";

// Define types for our data
type TimeRange = "day" | "week" | "month";

interface DataPoint {
  hours: number;
  time?: string;
  day?: string;
  week?: string;
}

interface ChartData {
  day: DataPoint[];
  week: DataPoint[];
  month: DataPoint[];
}

const Consistency = () => {
  // State with explicit type
  const [timeRange, setTimeRange] = useState<TimeRange>("week");

  // Chart data with proper typing
  const chartData: ChartData = {
    day: [
      { time: "6 AM", hours: 0 },
      { time: "9 AM", hours: 2 },
      { time: "12 PM", hours: 4 },
      { time: "3 PM", hours: 1 },
      { time: "6 PM", hours: 3 },
      { time: "9 PM", hours: 2 },
    ],
    week: [
      { day: "Sun", hours: 2 },
      { day: "Mon", hours: 8 },
      { day: "Tue", hours: 6 },
      { day: "Wed", hours: 4 },
      { day: "Thu", hours: 7 },
      { day: "Fri", hours: 5 },
      { day: "Sat", hours: 3 },
    ],
    month: [
      { week: "Week 1", hours: 18 },
      { week: "Week 2", hours: 22 },
      { week: "Week 3", hours: 15 },
      { week: "Week 4", hours: 20 },
    ],
  };

  // Get the correct data key based on time range
  const getDataKey = (range: TimeRange): keyof DataPoint => {
    switch (range) {
      case "day":
        return "time";
      case "week":
        return "day";
      case "month":
        return "week";
      default:
        return "day";
    }
  };

  const dataKey = getDataKey(timeRange);
  const yDomain = timeRange === "month" ? [0, 30] : [0, 10];

  return (
    <div className=" mt-20 mb-10 rounded-lg shadow-sm">
      <div className="flex justify-between  items-center mb-4">
        <DashboardHeaders text="Study Consistency" />
        <div className="flex">
          {(["day", "week", "month"] as TimeRange[]).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1 text-[0.75rem] rounded-md ${
                timeRange === range
                  ? "bg-purple-100 text-lightblue font-medium"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData[timeRange]}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8A2BE2" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8A2BE2" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#F0F0F0"
            />

            <XAxis
              dataKey={dataKey}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              domain={yDomain}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />

            <Area
              type="monotone"
              dataKey="hours"
              stroke="#8A2BE2"
              fill="url(#colorHours)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Consistency;
