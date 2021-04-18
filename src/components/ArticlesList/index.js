import ArticleItem from '../ArticleItem';
import Button from '../shared/Button';
import Col from '../shared/Col';
import Container from '../shared/Container';
import NewsListMainTitle from "./../NewsListMainTitle";
import Row from '../shared/Row';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { actFetchPostsAsync } from "./../../store/posts/actions";
import { useEffect } from 'react';

export default function ArticlesList() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  
  let arrayArticleItems = null;
  arrayArticleItems = posts.map((post, index) => {
    return (
        <Col md={6} key={ index }>
          <ArticleItem post={post}/>
        </Col>
      );
  });

  const handleLoadmore = () => {
    setIsLoading(true);
    dispatch(actFetchPostsAsync(page));
    setPage(page + 1);
  }

  useEffect(() => {
    setIsLoading(false);
  }, [posts]);

  return (
    <div className="articles-list section">
      <Container>
        <NewsListMainTitle>Danh sách bài viết</NewsListMainTitle>
        <Row>
        { arrayArticleItems.length === 0 ? <h1 align="center">Đang tải . . .</h1> : arrayArticleItems }
        </Row>
        {/* End Row News List */}
        {/* Btn Loadmore */}
        <div className="text-center">
          <Button onClick={ handleLoadmore } size="large" variant="primary" loading={ isLoading }>Tải thêm</Button>
        </div>
      </Container>
    </div>
  )
}