// import React, { useState, useEffect } from "react";
import "./QuickActionCard.scss";

export default function QuickActionCard({ title, icon, description, action }) {
  return (
    <div className="quick-action__card" onClick={action}>
      <div className="quick-action__content">
        <div className="quick-action__visible">
          <img src={icon} alt={`${title} icon`} />
          <h2 className="quick-action__title">{title}</h2>
        </div>
        <p className="quick-action__description">{description}</p>
      </div>
    </div>
  );
}
