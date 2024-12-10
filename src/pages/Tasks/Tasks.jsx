import TasksList from "../../components/TasksList/TasksList";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import "./Tasks.scss";
const apiUrl = import.meta.env.VITE_API_URL;

import axios from "axios";
import { useState, useEffect } from "react";

export default function Tasks() {
  const [taskItems, setTaskItems] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState(taskItems);
  const [search, setSearch] = useState("");

  useEffect(() => {
    generateTaskItems();
  }, []);

  const generateTaskItems = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/tasks`);
      setTaskItems(data);
      setFilteredTasks(data);
    } catch (error) {
      console.error("Error fetching tasks data:", error);
    }
  };

  const handleSearchInput = (event) => {
    event.preventDefault();
    const searchValue = event.target.value.toLowerCase();
    setSearch(searchValue);

    const filtered = taskItems.filter(
      (item) =>
        item.task_name.toLowerCase().includes(searchValue) ||
        item.description.toLowerCase().includes(searchValue)
    );
    setFilteredTasks(filtered);
  };

  return (
    <main className="tasks">
        <SearchHeader
          title="tasks"
          handleSearchInput={handleSearchInput}
          buttonLink="/tasks/add"
        />
      <div>
        <TasksList
          taskItems={filteredTasks}
          search={search}
        />
      </div>
    </main>
  );
}
