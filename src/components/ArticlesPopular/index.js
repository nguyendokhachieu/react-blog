import "./popular-news-list.css";
import NewsListMainTitle from "./../NewsListMainTitle";
import ArticleItem from "../ArticleItem";
import Container from "../shared/Container";
import { useSelector } from "react-redux";

export default function ArticlesPopular() {
  const popularPosts = useSelector((state) => state.posts.popularPosts);

  return (
    <div className="popular-news section bg-white-blue">
      <Container>
        <NewsListMainTitle isShowButton>Bài viết phổ biến</NewsListMainTitle>
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              <div className="popular-news__list--card">
                <ArticleItem
                  isStyleCard
                  isShowDesc
                  isShowCategoies
                  post={popularPosts[0]}
                />
              </div>
              <div className="popular-news__list--card">
                <ArticleItem
                  isStyleCard
                  isShowDesc
                  isShowCategoies
                  post={popularPosts[1]}
                />
              </div>
              <div className="popular-news__list--card">
                <ArticleItem
                  isStyleCard
                  isShowDesc
                  isShowCategoies
                  post={popularPosts[2]}
                />
              </div>
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              <div className="popular-news__list--card">
                <ArticleItem
                  isStyleCard
                  isStyleRow
                  isShowDesc
                  isShowCategoies
                  post={popularPosts[3]}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
