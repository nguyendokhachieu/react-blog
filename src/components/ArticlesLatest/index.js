import './latest-news-list.css';
import ArticleItem from '../ArticleItem';
import NewsListMainTitle from "./../NewsListMainTitle";
import { useSelector } from 'react-redux';

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

  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <NewsListMainTitle>Bài viết mới nhất</NewsListMainTitle>
        <div className="latest-news__list spacing">
          
          { arrayArticleItems }

        </div>
      </div>
    </div>
  )
}