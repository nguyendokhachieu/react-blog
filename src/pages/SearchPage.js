import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useRouteMatch } from "react-router";
import Search from "./../components/Search";

export default function SearchPage(props) {
  const [isCategoriesListLoaded, setIsCategoriesListLoaded] = useState(false);

  const categoriesList = useSelector(state => state.categories.categoriesList);
  const params = useParams();
  const { slug } = params;
  
  // if ()

  return (
      <Search />
  );
}
