import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EventList({ onSelectEvent }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/events").then(res => setEvents(res.data));
  }, []);

  return (
    <div style={{ maxHeight: "300px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>
      <h3>Events</h3>
      {events.map((e, idx) => (
        <div
          key={idx}
          style={{ cursor: "pointer", padding: "5px" }}
          onClick={() => onSelectEvent(e)}
        >
          <strong>{e.date}</strong> – {e.event}
        </div>
      ))}
    </div>
  );
}
