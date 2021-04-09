import './latest-news-list.css';
import ArticleItem from '../ArticleItem';
import NewsListMainTitle from "./../NewsListMainTitle";

export default function ArticlesLatest() {
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        {/* <MainTitle>Bài viết mới nhất</MainTitle> */}
        <NewsListMainTitle>Bài viết mới nhất</NewsListMainTitle>
        <div className="latest-news__list spacing">
          
          <div className="latest-news__card">
            <ArticleItem />
          </div>
          
          <div className="latest-news__card">
            <ArticleItem />
          </div>

          <div className="latest-news__card">
            <ArticleItem />
          </div>

        </div>
      </div>
    </div>
  )
}