import React from "react";
import { Tooltip, Legend, PieChart, Pie, ResponsiveContainer } from "recharts";

export function PieCharts({ value }) {
  // console.log(value);
  return (
    <PieChart width={250} height={250}>
      <Tooltip />
      <Legend />
      <Pie
        data={value}
        dataKey="[0]"
        nameKey="[1]"
        cx="50%"
        cy="50%"
        innerRadius={40}
        outerRadius={80}
        fill="#8884d8"
      />
    </PieChart>
  );
}
