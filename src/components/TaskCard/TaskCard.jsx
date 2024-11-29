import "./TaskCard.scss";
import { Link, Links } from "react-router-dom";
import React from "react";
import starIcon from "/assets/icons/shooting-star.svg";
import caretRightIcon from "/assets/icons/caret-double-right.svg";

export default function TaskCard({ task, generateTaskItem }) {
  return (
    <Link to={`/tasks/${task.id}`}>
      <div className="task-card">
        <h3>{task.task_name}</h3>
        <div className="task-card__stars-wrap">
          <img
            src={starIcon}
            alt="star icon"
            className="task-card__stars-icon"
          />
          <p>{task.stars_required}</p>
        </div>
        <img
          src={caretRightIcon}
          alt="arrow pointing right icon"
          className="task-card__icon-caret"
        />
      </div>
    </Link>
  );
}
