// import React, { useState, useEffect } from "react";
import "./QuickActionCard.scss";

export default function QuickActionCard({ title, icon, description }) {
  return (
    <div className="quick-action__card">
      <div className="quick-action__card-title">
        <img src={icon} alt="action icon" className="quick-action__card-icon"/>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}
