import React, { useState, useEffect } from "react";
import TaskCard from "../TaskCard/TaskCard";
import SearchHeader from "../Search/SearchHeader";
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

  return (
    <>
      <div className="tasks">
        <div>
          <SearchHeader
            title="tasks"
            buttonTitle="+ add new task"
            buttonLink="/tasks/add"
            handleSearchInput={handleSearchInput}
          />
        </div>
        <ul className="tasks-list">
          {filteredTasks.map((task) => (
            <li key={task.id}>
              <TaskCard task={task} generateTaskItems={generateTaskItems} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
