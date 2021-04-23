import { useParams, useLocation } from "react-router";
import SearchByCategory from "./../components/Search/SearchByCategory";

export default function SearchPage() {
  const params = useParams();
  const location = useLocation();

  const isCategorySearch = location.pathname.includes("categories");

  const { search_query, id } = params;

  if (isCategorySearch) {
    return <SearchByCategory id={id} />;
  }
}
