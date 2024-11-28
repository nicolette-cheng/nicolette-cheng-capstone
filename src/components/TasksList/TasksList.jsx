import React, { useState, useEffect } from "react";
import "./TasksList.scss";

export default function TasksList({ taskItems, generateTaskItems }) {
  const [filteredTasks, setFilteredTasks] = useState(taskItems);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      const filtered = taskItems.filter((item) =>
        [item.task_name, item.description]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      );
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(taskItems);
    }
  }, [search, taskItems]);

  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return <></>;
}
