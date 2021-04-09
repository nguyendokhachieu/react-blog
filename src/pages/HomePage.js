import Container from "./../components/shared/Container";
import ArticlesLatest from "./../components/ArticlesLatest";
import ArticlesPopular from "./../components/ArticlesPopular";
import ArticlesList from "./../components/ArticlesList";

function HomePage(props) {
  return (
    <Container>
      <ArticlesLatest />
      <ArticlesPopular />
      <ArticlesList />
   </Container>
  );
}

export default HomePage;
