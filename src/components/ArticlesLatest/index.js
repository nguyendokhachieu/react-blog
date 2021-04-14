import './latest-news-list.css';
import ArticleItem from '../ArticleItem';
import NewsListMainTitle from "./../NewsListMainTitle";

export default function ArticlesLatest({ latestPosts }) {

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
          {/* <div className="latest-news__card">
            <ArticleItem />
          </div>
          
          <div className="latest-news__card">
            <ArticleItem />
          </div>

          <div className="latest-news__card">
            <ArticleItem />
          </div> */}

        </div>
      </div>
    </div>
  )
}