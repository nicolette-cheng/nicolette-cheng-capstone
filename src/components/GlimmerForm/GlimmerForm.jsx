import "./GlimmerForm.scss";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import backIcon from "/assets/icons/arrow_back.svg";
import { OctagonAlertIcon } from "lucide-react";

const apiUrl = import.meta.env.VITE_API_URL;

export default function GlimmerForm() {
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    created_at: "",
    entry: "",
    stars_earned: 1, // automated 1 star per entry
  });

  const [errors, setErrors] = useState({});
  const [existingDates, setExistingDates] = useState([]);

  //   format date to YYYY-MM-DD
  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  // date range limit for datepicker, max 2 days behind
  const getDateLimits = () => {
    const today = new Date();
    const twoDaysAgo = new Date(today);
    twoDaysAgo.setDate(today.getDate() - 2);

    return {
      min: formatDate(twoDaysAgo),
      max: formatDate(today),
    };
  };

  const dateLimits = getDateLimits();

  const glimmerFields = [
    {
      label: "entry date",
      name: "created_at",
      type: "date",
      min: dateLimits.min,
      max: dateLimits.max,
    },
    { label: "entry", name: "entry" },
  ];

  useEffect(() => {
    const fetchExistingDates = async () => {
      try {
        const response = await axios.get(`${apiUrl}/glimmers`);
        const dates = response.data.map((glimmer) =>
          formatDate(new Date(glimmer.created_at))
        );
        setExistingDates(dates);
      } catch (error) {
        console.error("Error fetching existing dates:", error);
      }
    };

    fetchExistingDates();
  }, []);

  useEffect(() => {
    if (isEditMode) {
      axios
        .get(`${apiUrl}/glimmers/${id}`)
        .then((response) => {
          const glimmerItem = response.data;
          setFormData({
            created_at: glimmerItem.created_at,
            entry: glimmerItem.entry,
            stars_earned: 1,
          });
        })
        .catch((error) => {
          if (error.response?.status === 404) {
            navigate("/glimmers");
          }
        });
    }
  }, [isEditMode, id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateFields = () => {
    const newErrors = {};

    // Basic field validation
    if (!formData.created_at) {
      newErrors.created_at = "Entry date is required.";
    }
    if (!formData.entry.trim()) {
      newErrors.entry = "Entry is required.";
    }

    // Date validation
    if (formData.created_at) {
      const selectedDate = formatDate(new Date(formData.created_at));

      // Check if date is within allowed range
      if (selectedDate < dateLimits.min || selectedDate > dateLimits.max) {
        newErrors.created_at = "Date must be within the last 2 days.";
      }

      // Check if entry already exists for selected date
      // Skip this check if we're in edit mode and it's the same date
      if (!isEditMode && existingDates.includes(selectedDate)) {
        newErrors.created_at = "An entry already exists for this date.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateFields()) {
      try {
        const requestData = {
          created_at: formData.created_at,
          entry: formData.entry.trim(),
          stars_earns: 1,
        };

        const response = isEditMode
          ? await axios.put(`${apiUrl}/glimmers/${id}`, requestData)
          : await axios.post(`${apiUrl}/glimmers`, requestData);

        if (response.status === 201 || response.status === 200) {
          navigate(isEditMode ? `/glimmers/${id}` : "/glimmers");
        }
      } catch (error) {
        console.error("Error:", error);
        setErrors({
          submit: error.response?.data?.message || "Error saving glimmer",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glimmer-form">
      <div className="glimmer-form__content-wrap">
        <legend>
          <Link to={isEditMode ? `/glimmers/${id}` : "/glimmers"}>
            <img src={backIcon} alt="arrow back icon" />
          </Link>
          <h1>{isEditMode ? "edit glimmer" : "add new glimmer"}</h1>
        </legend>
        <div className="glimmer-form__input-wrap">
          <section>
            <h2>glimmer details</h2>
            {glimmerFields.map((field) => {
              let inputElement = null;

              if (field.name === "entry") {
                inputElement = (
                  <textarea
                    name={field.name}
                    id={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={`input-control ${
                      errors[field.name]
                        ? "glimmer-form__input-control--error"
                        : ""
                    }`}
                    placeholder="A moment that sparked joy..."
                  />
                );
              } else {
                inputElement = (
                  <input
                    type={field.type || "text"}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    min={field.min}
                    max={field.max}
                    className={`input-control ${
                      errors[field.name]
                        ? "glimmer-form__input-control--error"
                        : ""
                    }`}
                  />
                );
              }

              return (
                <div className="glimmer-form__input-field" key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="glimmer-form__input-label"
                  >
                    {field.label}
                  </label>
                  {inputElement}
                  {errors[field.name] && (
                    <span className="glimmer-form__error-msg">
                      <OctagonAlertIcon />
                      {errors[field.name]}
                    </span>
                  )}
                </div>
              );
            })}
            {errors.submit && (
              <div className="glimmer-form__error-message">{errors.submit}</div>
            )}
          </section>
          <div className="glimmer-form__actions">
            <Link to="/glimmers" className="glimmer-form__button-link">
              cancel
            </Link>
            <button type="submit" className="button">
              {isEditMode ? "save" : "+ add glimmer"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
