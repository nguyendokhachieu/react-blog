import { useRouteMatch } from "react-router";
import Search from "./../components/Search";

export default function SearchPage(props) {
  const match = useRouteMatch();
  const {search_query} = match.params;

  console.log(search_query);
  
  return (
      <Search />
  );
}
