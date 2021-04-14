import Container from "./../components/shared/Container";
import ArticlesLatest from "./../components/ArticlesLatest";
import ArticlesPopular from "./../components/ArticlesPopular";
import ArticlesList from "./../components/ArticlesList";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { actFetchPopularPostAsync, actFetchLatestPostAsync } from "./../store/posts/actions";

function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  
  useEffect(() => {
    dispatch(actFetchLatestPostAsync());
    dispatch(actFetchPopularPostAsync());
  }, []);

  return (
    <Container>
      <ArticlesLatest latestPosts={posts.latestPosts} />
      <ArticlesPopular popularPosts={posts.popularPosts} />
      <ArticlesList />
   </Container>
  );
}

export default HomePage;
