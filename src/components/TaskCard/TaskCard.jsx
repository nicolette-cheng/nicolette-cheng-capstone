import "./TaskCard.scss";
import { Link } from "react-router-dom";
import React from "react";
import starIcon from "/assets/icons/shooting-star.svg";
import caretRightIcon from "/assets/icons/caret-double-right.svg";

export default function TaskCard({ task }) {
  return (
    <Link
      to={`/tasks/${task.id}`}
      className="task-card__link"
      aria-label={`View task: ${task.task_name}, ${task.stars_required} stars required`}
    >
      <div className="task-card">
        <h2 className="task-card__title">{task.task_name}</h2>
        <div
          className="task-card__stars-wrap"
          aria-label={`${task.stars_required} stars required`}
        >
          <img
            src={starIcon}
            alt=""
            aria-hidden="true"
            className="task-card__icon-stars"
          />
          <p className="task-card__stars-count">{task.stars_required}</p>
        </div>
        <img
          src={caretRightIcon}
          alt=""
          aria-hidden="true"
          className="task-card__icon-caret"
        />
      </div>
    </Link>
  );
}
