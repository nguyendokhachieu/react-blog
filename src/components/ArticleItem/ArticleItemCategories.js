import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"
import { generateCategoryHashKey } from "./../../store/categories/reducer";

export default function ArticleItemCategories({ categories }) {
  const categoriesHashObj = useSelector(state => state.categories.categoriesHashObj);

  let categoriesJSX = null;
  categoriesJSX = categories.map((id, index) => {
    let key = generateCategoryHashKey(id);
    let value = categoriesHashObj[key];

    if (!value) {
      return null;
    }
    
    return (
      <li key={ index }>
          <Link to={ `/categories/${value.slug}` } className="btn btn-category">{ value.name }</Link>
      </li>
    );
  });

  
  return <ul className="article-item__categories">{ categoriesJSX }</ul>
}