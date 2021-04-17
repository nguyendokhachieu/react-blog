import Container from "./../components/shared/Container";
import ArticlesLatest from "./../components/ArticlesLatest";
import ArticlesPopular from "./../components/ArticlesPopular";
import ArticlesList from "./../components/ArticlesList";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { actFetchPopularPostAsync, actFetchLatestPostAsync, actFetchPostsAsync } from "./../store/posts/actions";
import { actGetCategoriesAsync } from "./../store/categories/actions";

function HomePage() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(actFetchLatestPostAsync());
    dispatch(actFetchPopularPostAsync());
    dispatch(actGetCategoriesAsync());
    dispatch(actFetchPostsAsync());
  }, [dispatch]);

  return (
    <Container>
      <ArticlesLatest />
      <ArticlesPopular />
      <ArticlesList />
   </Container>
  );
}

export default HomePage;
