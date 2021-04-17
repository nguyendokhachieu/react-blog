import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"

export default function ArticleItemCategories({ categories }) {
  const categoriesList = useSelector(state => state.categories.categoriesList);

  let categoriesJSX = null;
  categoriesJSX = categoriesList.map((category, index) => {
    if (categories.includes(category.id)) {
      return (
        <li key={ index }>
          <Link to={ `/categories/${category.slug}` } className="btn btn-category">{ category.name }</Link>
        </li>
      );
    }
  });

  return <ul className="article-item__categories">{ categoriesJSX }</ul>
}