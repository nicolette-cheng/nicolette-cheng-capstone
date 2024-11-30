import "./TaskDetails.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DetailsHeader from "../../components/DetailsHeader/DetailsHeader";

const { VITE_API_URL } = import.meta.env;

export default function TaskDetails() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [currentTask, setCurrentTask] = useState(null);

  async function getTask() {
    try {
      const response = await axios.get(`${VITE_API_URL}/tasks/${id}`);
      //   console.log(response.data);
      setCurrentTask(response.data);
    } catch (error) {
      if (error.status === 404) {
        navigate("/tasks");
      }
      console.error(`Unable to retrieve task details: ${error}`);
    }
  }

  useEffect(() => {
    getTask();
  }, [id]);

  if (!currentTask) {
    return <div>Loading task...</div>;
  }

  const { task_name, description, stars_required, created_at, updated_at } =
    currentTask;

  return (
    <div className="task-details">
      <div className="task-details__title-overlay">
        <DetailsHeader
          title={task_name}
          pathBack="/tasks"
          pathEdit={`/task/${id}`}
        />
      </div>
    </div>
  );
}
