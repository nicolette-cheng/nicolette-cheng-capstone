import "./TaskForm.scss";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import backIcon from "/assets/icons/arrow_back.svg";

const apiUrl = import.meta.env.VITE_API_URL;

export default function TaskForm() {
  // isEditMode variable to define if id parameter is present for add vs edit mode
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [rewards, setRewards] = useState([]); // state for storing rewards list

  // redirect user to task list after submission
  const navigate = useNavigate();

  // form data state
  const [formData, setFormData] = useState({
    task_name: "",
    description: "",
    stars_required: "",
    reward: "",
    reward_id: "",
  });

  // fields for task item details
  const taskFields = [
    { label: "task name", name: "task_name" },
    { label: "description", name: "description" },
    { label: "stars required", name: "stars_required", type: "number" },
    {
      label: "reward associated",
      name: "reward",
      options: ["brunch", "buy game"],
    },
  ];

  useEffect(() => {
    if (isEditMode) {
      axios.get(`${apiUrl}/tasks/${id}`);
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <legend>
        <Link to={isEditMode ? `/tasks/${id}` : "/tasks"}>
          <img src={backIcon} alt="arrow back icon" />
        </Link>
        <h1>{isEditMode ? "edit task" : "add new task"}</h1>
      </legend>
    </form>
  );
}
