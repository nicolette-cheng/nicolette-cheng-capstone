import "./TaskForm.scss";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import backIcon from "/assets/icons/arrow_back.svg";
import { OctagonAlertIcon } from "lucide-react";

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
    },
  ];

  useEffect(() => {
    if (isEditMode) {
      axios
        .get(`${apiUrl}/tasks/${id}`)
        .then((response) => {
          const taskItem = response.data;

          // if reward_id is missing, find it via reward_name instead
          let reward_id = taskItem.reward_id;

          if (!reward_id && taskItem.reward_name) {
            const selectedReward = rewards.find(
              (reward) => reward.reward_name === taskItem.reward_name
            );
            reward_id = selectedReward ? selectedReward.id : "";
          }

          // prepopuldate form data w/existing task details
          setFormData({
            task_name: taskItem.task_name,
            description: taskItem.description,
            stars_required: taskItem.stars_required,
            reward: taskItem.reward_name,
            reward_id: reward_id,
          });
        })
        .catch((error) => {
          if (error.response?.status === 404) {
            navigate("/tasks");
          }
        });
    }
  }, [isEditMode, id, rewards]); // dependent on "rewards" in case they are updated

  useEffect(() => {
    fetchRewards();
  }, []);
  const fetchRewards = async () => {
    try {
      const response = await axios.get(`${apiUrl}/rewards`);
      setRewards(response.data); // sets task list as all task items
    } catch (error) {
      console.error("Error fetching rewards data:", error);
    }
  };

  const [errors, setErrors] = useState({});

  // handles field changes and removes error message on input
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "stars_required") {
      setFormData((prev) => ({
        ...prev,
        stars_required: Number.isInteger(Number(value)) ? Number(value) : "",
      }));
    } else if (name === "reward_id") {
      setFormData((prev) => ({
        ...prev,
        reward_id: value,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));

      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    }
  };

  // validates form fields
  const validateFields = () => {
    const newErrors = {};
    if (!formData.task_name.trim()) {
      newErrors.task_name = "Task name is required.";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
    }
    if (isNaN(Number(formData.stars_required))) {
      newErrors.stars_required =
        "Stars count is required and must be a number.";
    }
    if (!formData.reward_id) {
      newErrors.reward = "Reward selection is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateFields()) {
      try {
        // create requestData with updated formData
        const requestData = {
          task_name: formData.task_name.trim(),
          description: formData.description.trim(),
          stars_required: Number(formData.stars_required), // Ensure this is a number
          reward_id: formData.reward_id,
        };

        delete requestData.reward; // remove reward name from request data

        console.log("Request Data Types:", {
          task_name: typeof requestData.task_name,
          description: typeof requestData.description,
          stars_required: typeof requestData.stars_required,
          reward_id: typeof requestData.reward_id,
        });

        const response = isEditMode
          ? await axios.put(`${apiUrl}/tasks/${id}`, requestData)
          : await axios.post(`${apiUrl}/tasks`, requestData);

        if (response.status === 201 || response.status === 200) {
          setFormData({
            task_name: "",
            description: "",
            stars_required: "",
            reward: "",
            reward_id: "",
          });

          if (isEditMode) {
            navigate(`tasks/${id}`);
          } else {
            navigate("/tasks");
          }
        }
      } catch (error) {
        console.error("Full Error:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="task-form__content-wrap">
        <legend>
          <Link to={isEditMode ? `/tasks/${id}` : "/tasks"}>
            <img src={backIcon} alt="arrow back icon" />
          </Link>
          <h1>{isEditMode ? "edit task" : "add new task"}</h1>
        </legend>
        <div className="task-form__input-wrap">
        <section>
          <h2>task details</h2>
          {taskFields.map((field) => {
            let inputElement = null;

            // if field is reward; render options dropdown
            if (field.name === "reward") {
              inputElement = (
                <select
                  name="reward_id"
                  id="reward_id"
                  value={formData.reward_id}
                  onChange={handleChange}
                  className={`input-control ${
                    errors[field.name] ? "task-form__input-control--error" : ""
                  }`}
                >
                  <option value="">Select reward associated</option>
                  {rewards.map((reward) => (
                    <option value={reward.id} key={reward.id}>
                      {reward.reward_name}
                    </option>
                  ))}
                </select>
              );
              // if description; render textarea
            } else if (field.name === "description") {
              inputElement = (
                <textarea
                  name={field.name}
                  id={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className={`input-control ${
                    errors[field.name] ? "task-form__input-control--error" : ""
                  }`}
                  placeholder={field.label}
                />
              );
            }
            // other fields w/normal text input
            else {
              inputElement = (
                <input
                  type="text"
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className={`input-control ${
                    errors[field.name] ? "task-form__input-control--error" : ""
                  }`}
                  placeholder={field.label}
                />
              );
            }

            return (
              <div className="task-form__input-field" key={field.name}>
                <label htmlFor={field.name} className="task-form__input-label">
                  {field.label}
                </label>
                {inputElement}
                {""}
                {errors[field.name] && (
                  <span className="task-form__error-msg">
                    <OctagonAlertIcon />
                    {errors[field.name]}
                  </span>
                )}
              </div>
            );
          })}
        </section>
        <div className="task-form__actions">
          <Link className="task-form__button-link"><h3>cancel</h3></Link>
          <button type="submit" className="button">
            {isEditMode ? "save" : "+ add task"}
          </button>
        </div>
        </div>
      </div>
    </form>
  );
}
