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
export function SingalBar ({value}){
    return(
        <>
          <div>
            {/* <ResponsiveContainer width={400} height={250} > */}
              <BarChart width={300}  height={250}
                data={value}
                margin={{ top: 15, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="[1]" />
                <YAxis/>
                <Tooltip />
                <Legend />
                <Bar dataKey="[0]" name="Matchs" fill="#8884d8" />
              </BarChart>
            {/* </ResponsiveContainer> */}
          </div>
        </>
    );
}