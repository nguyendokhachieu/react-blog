import ArticleItem from "../ArticleItem";
import Button from "../shared/Button";
import Col from "../shared/Col";
import Container from "../shared/Container";
import NewsListMainTitle from "./../NewsListMainTitle";
import Row from "../shared/Row";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { actFetchPostsAsync } from "./../../store/posts/actions";

export default function ArticlesList() {
  const dispatch = useDispatch();
  const postsPaging = useSelector((state) => state.posts.posts.postsPaging);
  const currentPage = useSelector((state) => state.posts.posts.currentPage);
  const totalPosts = useSelector((state) => state.posts.posts.totalPosts);
  const [isLoading, setIsLoading] = useState(false);
  const hasMorePosts = postsPaging.length < totalPosts;

  if (postsPaging.length === 0) {
    return null;
  }

  let arrayArticleItems = null;
  arrayArticleItems = postsPaging.map((post, index) => {
    return (
      <Col md={6} key={index}>
        <ArticleItem post={post} />
      </Col>
    );
  });

  const handleLoadmore = () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    dispatch(actFetchPostsAsync(currentPage + 1)).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="articles-list section">
      <Container>
        <NewsListMainTitle>Danh sách bài viết</NewsListMainTitle>
        <Row>
          {postsPaging.length === 0 ? (
            <h2>Đang tải . . .</h2>
          ) : (
            arrayArticleItems
          )}
        </Row>
        <div className="text-center">
          {hasMorePosts && (
            <Button
              onClick={handleLoadmore}
              size="large"
              variant="primary"
              loading={isLoading}
            >
              Tải thêm
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
}
