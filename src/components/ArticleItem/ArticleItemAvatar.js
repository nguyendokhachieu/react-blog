
export default function ArticleItemAvatar({ authorData }) {
  let avatarLink = 'https://apsec.iafor.org/wp-content/uploads/sites/37/2017/02/IAFOR-Blank-Avatar-Image.jpg';
  if (authorData.avatar) {
    avatarLink = authorData.avatar;
  }

  return (
    <div className="article-item__author-image">
      <a aria-label={ authorData.nickname } href="/">
        <img src={ avatarLink } alt={ authorData.nickname } />
      </a>
    </div>
  )
}