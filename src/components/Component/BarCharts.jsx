import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts"
export function BarCharts ({value}){
    return(
        <>
          <div>
            {/* <ResponsiveContainer > */}
              <BarChart width={400}  height={250}
                data={value}
                margin={{ top: 25, right: 25, left: 0, bottom: 15 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="[2]" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="[0]" name="Matchs" fill="#8884d8" />
                <Bar dataKey="[1]" name="Innings" fill="#82ca9d" />
              </BarChart>
            {/* </ResponsiveContainer> */}
          </div>
        </>
    );
}