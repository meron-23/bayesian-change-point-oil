import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine
} from "recharts";

export default function PriceChart({ startDate, endDate, selectedEventType }) {
  const [prices, setPrices] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/prices").then(res => setPrices(res.data));
    axios.get("http://localhost:5000/api/events").then(res => setEvents(res.data));
  }, []);

  // Filter prices based on date range
  const filteredPrices = prices.filter(p => {
    const date = new Date(p.Date);
    return (!startDate || date >= new Date(startDate)) &&
           (!endDate || date <= new Date(endDate));
  });

  // Filter events based on type
  const filteredEvents = events.filter(e => {
    const date = new Date(e.date);
    const inRange = (!startDate || date >= new Date(startDate)) &&
                    (!endDate || date <= new Date(endDate));
    const typeMatch = !selectedEventType || e.type === selectedEventType;
    return inRange && typeMatch;
  });

  return (
    <LineChart width={1000} height={500} data={filteredPrices}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Date" />
      <YAxis domain={['auto', 'auto']} />
      <Tooltip />
      <Line type="monotone" dataKey="Price" stroke="#007bff" dot={false} />
      {filteredEvents.map((e, idx) => (
        <ReferenceLine key={idx} x={e.date} stroke="red" label={e.event} />
      ))}
    </LineChart>
  );
}
