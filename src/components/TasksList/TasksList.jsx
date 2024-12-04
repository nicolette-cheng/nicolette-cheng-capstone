import React, { useState, useEffect } from "react";
import TaskCard from "../TaskCard/TaskCard";
import "./TasksList.scss";

export default function TasksList({ taskItems, search }) {
  const [filteredTasks, setFilteredTasks] = useState(taskItems);

  useEffect(() => {
    setFilteredTasks(taskItems);
  }, [search, taskItems]);

  return (
    <div className="tasks-list__wrapper" role="region" aria-label="Tasks list">
      {filteredTasks.length === 0 ? (
        <p className="tasks-list__empty">No tasks found</p>
      ) : (
        <ul className="tasks-list">
          {filteredTasks.map((task) => (
            <li key={task.id}>
              <TaskCard task={task} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
