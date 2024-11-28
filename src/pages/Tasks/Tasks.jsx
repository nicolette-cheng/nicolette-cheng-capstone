import TasksList from "../../components/TasksList/TasksList";
const apiUrl = import.meta.env.VITE_API_URL;

import axios from "axios";
import { useState, useEffect } from "react";

export default function Tasks() {
  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    generatetTaskItems();
  }, []);

  const generatetTaskItems = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/tasks`);
      setTaskItems(data);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching tasks data:", error);
    }
  };

  return (
    <>
      <TasksList
        taskItems={taskItems}
        generatetTaskItems={generatetTaskItems}
      />
    </>
  );
}
