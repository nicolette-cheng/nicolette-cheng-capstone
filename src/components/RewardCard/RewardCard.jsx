import "./RewardCard.scss";
import { Link } from "react-router-dom";
import React from "react";
import starIcon from "/assets/icons/shooting-star.svg";
import caretRightIcon from "/assets/icons/caret-double-right.svg";

export default function RewardCard({ reward }) {
  return (
    <Link
      to={`/rewards/${reward.id}`}
      className="reward-card__link"
      aria-label={`View reward: ${reward.reward_name}, ${reward.stars_required} stars required`}
    >
      <div className="reward-card">
        <h2 className="reward-card__title">{reward.reward_name}</h2>
        <div
          className="reward-card__stars-wrap"
          aria-label={`${reward.stars_required} stars required`}
        >
          <img
            src={starIcon}
            alt=""
            aria-hidden="true"
            className="reward-card__icon-stars"
          />
          <p className="reward-card__stars-count">{reward.stars_required}</p>
        </div>
        <img
          src={caretRightIcon}
          alt=""
          aria-hidden="true"
          className="reward-card__icon-caret"
        />
      </div>
    </Link>
  );
}
