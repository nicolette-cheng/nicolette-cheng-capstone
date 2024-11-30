import "./DetailsHeader.scss";
import { Link } from "react-router-dom";
import { ChevronLeft, PencilIcon } from "lucide-react";

export default function DetailsHeader({ title, pathBack, pathEdit }) {
  return (
    <div className="details-title__card">
      <div className="details-title__wrapper">
        <Link to={pathBack}>
          <img
            src={ChevronLeft}
            alt="back/chevron icon"
            className="details-title__icon-back"
          />
        </Link>
        <h2 className="details-title__header">{title}</h2>
      </div>
      <Link to={pathEdit}>
        <img
          src={PencilIcon}
          alt="pencil/edit icon"
          className="details-title__icon-edit"
        />
      </Link>
    </div>
  );
}
