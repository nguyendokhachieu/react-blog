import { Link } from 'react-router-dom';

export default function ArticleItemThumb({
  url,
  slug,
}) {
  return (
    <div className="article-item__thumbnail">
      <Link to={ `/post-detail/${slug}` }>
        <img src={url} alt="assets/images/blog-1.jpg" />
      </Link>
    </div>
  )
}