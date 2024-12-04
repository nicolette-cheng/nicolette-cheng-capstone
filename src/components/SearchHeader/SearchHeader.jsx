import { Link } from "react-router-dom";
import "./SearchHeader.scss";

export default function SearchHeader({ title, handleSearchInput, buttonLink }) {
  return (
    <div className="search-header">
      <h1>{title}</h1>
      <div className="search-header__wrapper">
        <input
          type="search"
          placeholder="Search..."
          onChange={handleSearchInput}
        />
        <Link to={buttonLink} className="search-header__button">
          <h3>+ add new</h3>
        </Link>
      </div>
    </div>
  );
}
