import "./RewardCard.scss";
import { Link } from "react-router-dom";
import React from "react";
import starIcon from "/assets/icons/shooting-star.svg";
import caretRightIcon from "/assets/icons/caret-double-right.svg";

export default function RewardCard({ reward }) {
  return (
    <Link to={`/rewards/${reward.id}`}>
      <div className="reward-card">
        <h3>{reward.reward_name}</h3>
        <div className="reward-card__stars-wrap">
          <img
            src={starIcon}
            alt="star icon"
            className="reward-card__icon-stars"
          />
          <p>{reward.stars_required}</p>
        </div>
        <img
          src={caretRightIcon}
          alt="arrow pointing right icon"
          className="reward-card__icon-caret"
        />
      </div>
    </Link>
  );
}
