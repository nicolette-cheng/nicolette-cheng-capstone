import "./TaskCard.scss";
import React from "react";
import { Link } from "react-router-dom";
import caretRightIcon from "/assets/icons/caret-double-right.svg"

export default function TaskCard({ task, generateTaskItem }) {
  return (
    <>
      <div>
        <p>{task.task_name}</p>
        <p>{task.stars_required}</p>
        <img src={caretRightIcon} alt="right arrow" />
      </div>
    </>
  );
}
