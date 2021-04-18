import './latest-news-list.css';
import ArticleItem from '../ArticleItem';
import NewsListMainTitle from "./../NewsListMainTitle";
import { useSelector } from 'react-redux';
import Loading from "./../shared/Loading";

export default function ArticlesLatest() {

  const latestPosts = useSelector(state => state.posts.latestPosts);

  let arrayArticleItems = null;
  arrayArticleItems = latestPosts.map((post, index) => {
    return (
        <div className="latest-news__card" key={index}>
          <ArticleItem post={post}/>
        </div>
      );
  });
  console.log(arrayArticleItems);

  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <NewsListMainTitle>Bài viết mới nhất</NewsListMainTitle>
        <div className="latest-news__list spacing">
          
          { arrayArticleItems.length === 0 ? <h1 align="center">Đang tải . . .</h1> : arrayArticleItems }

        </div>
      </div>
    </div>
  )
}