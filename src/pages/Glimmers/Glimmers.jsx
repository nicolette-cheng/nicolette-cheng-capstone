import "./Glimmers.scss";
const apiUrl = import.meta.env.VITE_API_URL;

import axios from "axios";
import { useState, useEffect } from "react";

export default function Glimmers() {
  const [glimmerItems, setGlimmerItems] = useState([]);
  const [filteredGlimmers, setFilteredGlimmers] = useState(glimmerItems);
  const [dateRange, setDateRange] = useState("");

  useEffect(() => {
    generateGlimmerItems();
  }, []);

  const generateGlimmerItems = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/glimmers`);
      setGlimmerItems(data);
      setFilteredGlimmers(data);
    } catch (error) {
      console.error("Error fetching glimmers data:", error);
    }
  };

  const handleDateChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setDateRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filterByDateRange = () => {
    if (!dateRange.startDate && !dateRange.endDate) {
      setFilteredGlimmers(glimmerItems);
      return;
    }

    const filtered = glimmerItems.filter((glimmer) => {
      const glimmerDate = new Date(glimmer.entry_date).getTime();
      const start = dateRange.startDate
        ? new Date(dateRange.startDate).getTime()
        : 0;
      const end = dateRange.endDate
        ? new Date(dateRange.endDate).getTime()
        : Infinity;

      return glimmerDate >= start && glimmerDate <= end;
    });

    setFilteredGlimmers(filtered);
  };

  useEffect(() => {
    filterByDateRange();
  }, [dateRange, glimmerItems]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="glimmers">
      <div className="glimmers__search">
        <input
          type="date"
          name="startDate"
          value={dateRange.startDate}
          onChange={handleDateChange}
          className="glimmers__date-input"
        />
        <span>to</span>
        <input
          type="date"
          name="endDate"
          value={dateRange.endDate}
          onChange={handleDateChange}
          className="glimmers__date-input"
        />
      </div>

      <div className="glimmers__list">
        {filteredGlimmers.map((glimmer) => (
          <div key={glimmer.id} className="glimmers__item">
            <div className="glimmers__date">
              {formatDate(glimmer.entry_date)}
            </div>
            <div className="glimmers__entry">{glimmer.entry}</div>
          </div>
        ))}
      </div>
    </main>
  );
}