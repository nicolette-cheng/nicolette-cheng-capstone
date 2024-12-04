import React, { useState, useEffect } from "react";
import RewardCard from "../RewardCard/RewardCard";
import "./RewardsList.scss";

export default function RewardsList({
  rewardItems,
  search,
}) {
  const [filteredRewards, setFilteredRewards] = useState(rewardItems);

  useEffect(() => {
    setFilteredRewards(rewardItems);
  }, [search, rewardItems]);

  return (
    <div
      className="rewards-list__wrapper"
      role="region"
      aria-label="Rewards list"
    >
      {filteredRewards.length === 0 ? (
        <p className="rewards-list__empty">No rewards found</p>
      ) : (
        <ul className="rewards-list" role="list">
          {filteredRewards.map((reward) => (
            <li key={reward.id} className="rewards-list__item">
              <RewardCard reward={reward} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
