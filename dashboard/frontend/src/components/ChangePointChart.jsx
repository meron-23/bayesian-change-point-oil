import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine
} from "recharts";

export default function ChangePointChart() {
  const [prices, setPrices] = useState([]);
  const [changePoints, setChangePoints] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/prices").then(res => setPrices(res.data));
    axios.get("http://localhost:5000/api/change-points").then(res => setChangePoints(res.data));
  }, []);

  return (
    <LineChart width={1000} height={500} data={prices}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="Price" stroke="#007bff" dot={false} />
      {changePoints.map((cp, idx) => (
        <ReferenceLine
          key={idx}
          x={cp.date}
          stroke="green"
          label={`Change Point (${cp.mean_after > cp.mean_before ? '↑' : '↓'})`}
        />
      ))}
    </LineChart>
  );
}
