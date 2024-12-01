import "./SearchHeader.scss";

export default function SearchHeader({
  title,
  buttonLink,
  buttonTitle,
  handleSearchInput,
}) {
  return (
    <div className="search-header">
      <h1>{title}</h1>
      <form action="">
        <input
          type="search"
          placeholder="Search..."
          onChange={handleSearchInput}
        />
      </form>
    </div>
  );
}
