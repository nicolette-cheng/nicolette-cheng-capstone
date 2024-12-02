import "./DetailsSpecs.scss";
import starIcon from "/assets/icons/shooting-star.svg";

export default function DetailsSpecs({ stars, created, updated }) {
  const formattedCreatedDate = new Date(created).toISOString().split("T")[0];
  const formattedUpdatedDate = new Date(updated).toISOString().split("T")[0];

  return (
    <div className="details-specs">
      <h2 className="details-specs__wrapper-icon">
        {stars}
        <img src={starIcon} alt="stars icon" className="details-specs__icon" />
      </h2>
      <div className="details-specs__wrapper-timestamps">
        <p>created: {formattedCreatedDate}</p>
        <p>last updated: {formattedUpdatedDate}</p>
      </div>
    </div>
  );
}
