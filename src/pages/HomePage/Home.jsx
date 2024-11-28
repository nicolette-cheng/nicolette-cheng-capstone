import "./Home.scss";
import { useNavigate } from "react-router-dom";
import QuickActionCard from "../../components/QuickActionCard/QuickActionCard";
import addIcon from "/assets/icons/add.svg";
import rewardIcon from "/assets/icons/trophy.svg";
import progressIcon from "/assets/icons/progress.svg";
import glimmerIcon from "/assets/icons/sparkle.svg";
const apiUrl = import.meta.env.VITE_API_URL;

import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    generatetTaskItems();
  }, []);

  const generatetTaskItems = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/tasks`);
      setTaskItems(data);
      //   console.log(data);
    } catch (error) {
      console.error("Error fetching tasks data:", error);
    }
  };

  const today = new Date();
  const navigate = useNavigate();

  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const addTaskDes = "break down your goals";
  const viewRewardsDes = "stay motivated";
  const trackProgDes = "see your achievements";

  return (
    <div className="home">
      <main className="actions__container">
        <QuickActionCard
          title="create task"
          icon={addIcon}
          description={addTaskDes}
          action={() => navigate("/tasks/add")}
          className="quick-actions__card"
        />
        <QuickActionCard
          title="view rewards"
          icon={rewardIcon}
          description={viewRewardsDes}
          action={() => navigate("/rewards")}
          className="quick-actions__card"
        />
        <QuickActionCard
          title="track progress"
          icon={progressIcon}
          description={trackProgDes}
          action={() => navigate("/tasks")}
          className="quick-actions__card"
        />
        <QuickActionCard
          title="daily glimmer"
          icon={glimmerIcon}
          description={trackProgDes}
          action={() => navigate("/glimmer")}
          className="quick-actions__card"
        />
      </main>
      <div className="home-headers__wrap">
        <h2>today is</h2>
        <h1 className="home__header">{formattedDate}</h1>
        <h3>it's a good day to believe in yourself</h3>
      </div>
    </div>
  );
}
