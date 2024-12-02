import React, { useState, useEffect } from "react";
import RewardCard from "../RewardCard/RewardCard";
import "./RewardsList.scss";

export default function RewardsList({
  rewardItems,
  generatedRewardItems,
  search,
}) {
  const [filteredRewards, setFilteredRewards] = useState(rewardItems);

  useEffect(() => {
    setFilteredRewards(rewardItems);
  }, [search, rewardItems]);

  return (
    <div>
      <ul className="rewards-list">
        {filteredRewards.map((reward) => (
          <li key={reward.id}>
            <RewardCard reward={reward} />
          </li>
        ))}
      </ul>
    </div>
  );
}
