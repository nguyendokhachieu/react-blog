import SearchIconSvg from "./SearchIconSvg";

export default function SearchForm(props) {
  return (
    <form action="/search.html" method="get">
      <div className="header-search">
        <SearchIconSvg />
        <input
          className="header-search__input"
          type="text"
          placeholder="Search articles here ..."
          aria-label="Search"
          name="query"
        />
        
      </div>
    </form>
  );
}
