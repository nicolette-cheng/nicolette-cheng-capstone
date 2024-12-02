import React, { useState, useEffect } from "react";
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
          <li key={reward.id}></li>
        ))}
      </ul>
    </div>
  );
}
