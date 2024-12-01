import React, { useState, useEffect } from "react";
import TaskCard from "../TaskCard/TaskCard";
import "./TasksList.scss";

export default function TasksList({ taskItems, generateTaskItems }) {
  const [filteredTasks, setFilteredTasks] = useState(taskItems);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilteredTasks(taskItems);
  }, [search, taskItems]);

  return (
    <ul className="tasks-list">
      {filteredTasks.map((task) => (
        <li key={task.id}>
          <TaskCard task={task} generateTaskItems={generateTaskItems} />
        </li>
      ))}
    </ul>
  );
}
