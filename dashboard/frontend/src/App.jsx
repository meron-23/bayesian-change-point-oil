import React, { useState } from "react";
import PriceChart from "./components/PriceChart";
import ChangePointChart from "./components/ChangePointChart";
import EventList from "./components/EventList";
import Filters from "./components/Filters";

export default function App() {
  const [filters, setFilters] = useState({});

  return (
    <div style={{ padding: "20px" }}>
      <h1>Brent Oil Price Dashboard</h1>
      <Filters onFilterChange={setFilters} />
      <PriceChart {...filters} />
      <h2>Change Points</h2>
      <ChangePointChart />
      <h2>Events</h2>
      <EventList onSelectEvent={(event) => {
        alert(`Selected event: ${event.event}`);
      }} />
    </div>
  );
}
