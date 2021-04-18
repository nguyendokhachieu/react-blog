import './article-item.css';
import cls from 'classnames';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemInfo from './ArticleItemInfo';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemStats from './ArticleItemStats';
import Loading from "./../shared/Loading";

export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = true,
  post,
}) {

  const classes = cls('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow,
  })

  if (!post) {
    return null;
  }
  
  return (
    <article className={classes}>
      <ArticleItemThumb url={ post.featured_media_url } slug={ post.slug } />
      <div className="article-item__content">

        { isShowCategoies && <ArticleItemCategories categories={ post.categories } /> }
        { isShowCategoies && <ArticleItemStats viewCount={ post.view_count }/> }

        <ArticleItemTitle slug={ post.slug } title={ post.title.rendered }/>

        { isShowDesc && <ArticleItemDesc description={ post.excerpt.rendered }/> }

        <ArticleItemInfo isShowAvatar={isShowAvatar} authorData={ post.author_data } date={ post.date }/>
      </div>
    </article>
  )
}