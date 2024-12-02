import "./RewardDetails.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import DetailsHeader from "../../components/DetailsHeader/DetailsHeader";
import DetailsSpecs from "../../components/DetailsSpecs/DetailsSpecs";
import DetailsDescription from "../../components/DetailsDescription/DetailsDescription.jsx";

const { VITE_API_URL } = import.meta.env;

export default function RewardDetails() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [currentReward, setCurrentReward] = useState(null);

  async function getReward() {
    try {
      const response = await axios.get(`${VITE_API_URL}/rewards/${id}`);
      setCurrentReward(response.data);
    } catch (error) {
      if (error.status === 404) {
        navigate("/rewards");
      }
      console.error(`Unable to retrieve reward details: ${error}`);
    }
  }

  useEffect(() => {
    getReward();
  }, [id]);

  if (!currentReward) {
    return <div>Loading reward...</div>;
  }

  const { reward_name, description, stars_required, created_at, updated_at } =
    currentReward;

  return (
    <main className="reward-details">
      <div className="reward-details__header">
        <DetailsHeader
          title={reward_name}
          pathBack="/rewards"
          pathEdit={`/reward/${id}`}
        />
      </div>
      <div className="reward-details__description">
        <DetailsDescription
          stars={stars_required}
          created={created_at}
          updated={updated_at}
        />
      </div>
    </main>
  );
}
