import React, { useState } from "react";

export default function Filters({ onFilterChange }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eventType, setEventType] = useState("");

  const applyFilters = () => {
    onFilterChange({
      startDate,
      endDate,
      selectedEventType: eventType
    });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
      </label>
      <label style={{ marginLeft: "10px" }}>
        End Date:
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
      </label>
      <label style={{ marginLeft: "10px" }}>
        Event Type:
        <select value={eventType} onChange={e => setEventType(e.target.value)}>
          <option value="">All</option>
          <option value="geopolitical">Geopolitical</option>
          <option value="opec">OPEC Decision</option>
          <option value="economic">Economic</option>
        </select>
      </label>
      <button style={{ marginLeft: "10px" }} onClick={applyFilters}>
        Apply
      </button>
    </div>
  );
}
