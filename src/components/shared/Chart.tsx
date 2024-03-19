"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "4/3/2023", price: 149552.5 },
  { date: "18/3/2023", price: 144645 },
  { date: "1/4/2023", price: 139737.5 },
  { date: "15/4/2023", price: 134830 },
];

const ChartLine = () => {
  return (
    <ResponsiveContainer className="pt-[30px]" width="100%" height="45%">
      <LineChart width={500}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey="price" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
      </ResponsiveContainer>
  );
};

export default ChartLine;
