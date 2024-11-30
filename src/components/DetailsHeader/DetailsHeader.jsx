import "./DetailsHeader.scss";
import { Link } from "react-router-dom";
import { ChevronLeft, PencilIcon, Trash2 } from "lucide-react";

export default function DetailsHeader({
  title,
  pathBack,
  pathEdit /* , pathDelete */,
}) {
  return (
    <div className="details-title__card">
      <div className="details-title__wrapper-title">
        <Link to={pathBack}>
          <ChevronLeft className="details-title__icon-back" />
        </Link>
        <h2 className="details-title__header">{title}</h2>
      </div>
      <div className="details-title__wrapper-links">
        <Link to={pathEdit} className="details-title__link-edit">
          <PencilIcon className="details-title__icon-edit" />
        </Link>
        {/* <Link to={pathDelete} className="details-title__link-delete"> */}
        {/* ^commented out to add back in when delete functionality is added */}
        <Link to="/" className="details-title__link-delete">
          <Trash2 className="details-title__icon-delete" />
        </Link>
      </div>
    </div>
  );
}
