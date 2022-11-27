import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer
} from "recharts";

export function LineCharts({value}){
    return(
        <div>
           {/* <ResponsiveContainer width={400} height={250} > */}
             <LineChart width={400}  height={250}
                data={value} 
                margin={{ top: 25, right: 25, left: 0, bottom: 15 }}
              >
                <XAxis dataKey="[2]" />
                <YAxis />
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <Tooltip />
                <Legend  />
                <Line
                  name="Avg"
                  type="monotone"
                  dataKey="[0]"
                  stroke="red"
                />
                <Line
                  name="SR"
                  type="monotone"
                  dataKey="[1]"
                  stroke="blue"
                />
              </LineChart>
              {/* </ResponsiveContainer> */}
        </div>
    );
}
