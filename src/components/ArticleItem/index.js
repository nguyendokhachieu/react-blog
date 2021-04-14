import './article-item.css';
import cls from 'classnames';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemInfo from './ArticleItemInfo';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemStats from './ArticleItemStats';
import { useState, useEffect } from 'react';

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

  const [featuredMediaURL, setFeaturedMediaURL] = useState("");
  const [slug, setSlug] = useState("");
  const [viewCount, setViewCount] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [authorData, setAuthorData] = useState({
    nickname: "",
    description: "",
    avatar: null,
  });

  useEffect(() => {
    if (post) {
      setFeaturedMediaURL(post.featured_media_url);
      setSlug(post.slug);
      setViewCount(post.view_count);
      setTitle(post.title.rendered);
      setDescription(post.excerpt.rendered);
      setAuthorData(post.author_data);
      setDate(post.date);
    }
  }, [post]);

  return (
    <article className={classes}>
      <ArticleItemThumb url={ featuredMediaURL } slug={ slug } />
      <div className="article-item__content">

        { isShowCategoies && <ArticleItemCategories /> }
        { isShowCategoies && <ArticleItemStats viewCount={ viewCount }/> }

        <ArticleItemTitle slug={ slug } title={ title }/>

        { isShowDesc && <ArticleItemDesc description={ description }/> }

        <ArticleItemInfo isShowAvatar={isShowAvatar} authorData={ authorData } date={ date }/>
      </div>
    </article>
  )
}