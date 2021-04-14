import { Link } from "react-router-dom";

export default function ArticleItemTitle({
  slug,
  title,
}) {
  return (
    <h2 className="article-item__title">
      <Link to={ `/post-detail/${slug}/` }>
        { title }
      </Link>
    </h2>
  );
}
