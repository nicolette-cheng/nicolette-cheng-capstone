import "./RewardForm.scss";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import backIcon from "/assets/icons/arrow_back.svg";
import { OctagonAlertIcon } from "lucide-react";

const apiUrl = import.meta.env.VITE_API_URL;

export default function RewardForm() {
  // isEditMode variable to define if id parameter is present for add vs edit mode
  const { id } = useParams();
  const isEditMode = Boolean(id);

  // redirect user to rewards list after submission
  const navigate = useNavigate();

  // form data state
  const [formData, setFormData] = useState({
    reward_name: "",
    description: "",
    stars_required: "",
    reward_id: "",
  });

  // fields for task item details
  const rewardFields = [
    { label: "reward name", name: "reward_name" },
    { label: "description", name: "description" },
    { label: "stars required", name: "stars_required", type: "number" },
  ];

  useEffect(() => {
    if (isEditMode) {
      axios
        .get(`${apiUrl}/rewards/${id}`)
        .then((response) => {
          const rewardItem = response.data;

          // prepopuldate form data w/existing task details
          setFormData({
            reward_name: rewardItem.reward_name,
            description: rewardItem.description,
            stars_required: rewardItem.stars_required,
          });
        })
        .catch((error) => {
          if (error.response?.status === 404) {
            navigate("/rewards");
          }
        });
    }
  }, [isEditMode, id]);

  const [errors, setErrors] = useState({});

  // handles field changes and removes error message on input
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "stars_required") {
      setFormData((prev) => ({
        ...prev,
        stars_required: Number.isInteger(Number(value)) ? Number(value) : "",
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
    if (!formData.reward_name.trim()) {
      newErrors.reward_name = "Reward name is required.";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
    }
    if (isNaN(Number(formData.stars_required))) {
      newErrors.stars_required =
        "Stars count is required and must be a number.";
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
          reward_name: formData.reward_name.trim(),
          description: formData.description.trim(),
          stars_required: Number(formData.stars_required), // Ensure this is a number
        };

        console.log("Request Data Types:", {
          task_name: typeof requestData.reward_name,
          description: typeof requestData.description,
          stars_required: typeof requestData.stars_required,
        });

        const response = isEditMode
          ? await axios.put(`${apiUrl}/rewards/${id}`, requestData)
          : await axios.post(`${apiUrl}/rewards`, requestData);

        if (response.status === 201 || response.status === 200) {
          setFormData({
            reward_name: "",
            description: "",
            stars_required: "",
          });

          if (isEditMode) {
            navigate(`rewards/${id}`);
          } else {
            navigate("/rewards");
          }
        }
      } catch (error) {
        console.error("Full Error:", error);
      }
    }
  };

  return <div></div>;
}
