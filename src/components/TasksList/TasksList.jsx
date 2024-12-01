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
    <>
      <div className="tasks">
        {/* <div>
          <SearchHeader
            title="tasks"
            buttonTitle="+ add new task"
            buttonLink="/tasks/add"
            handleSearchInput={handleSearchInput}
          />
        </div> */}
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
