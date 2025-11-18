import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function CityDetail({ forecast }) {
  if (!forecast) return null;

  return (
    <div className="bg-white shadow-md p-4 rounded-xl mt-6 max-w-3xl mx-auto">
      <h3 className="text-lg font-semibold mb-3">📈 Temperature Trend</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={forecast}>
          <XAxis dataKey="dt_txt" tick={{ fontSize: 10 }} />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
