import "./Search.scss";
import { Link } from "react-router-dom";

export default function Search({
  title,
  buttonLink,
  buttonTitle,
  handleSearchInput,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <form action="">
        <input
          type="search"
          placeholder="Search..."
          onChange={handleSearchInput}
        />
        <Link to={buttonLink}>{buttonTitle}</Link>
      </form>
    </div>
  );
}
