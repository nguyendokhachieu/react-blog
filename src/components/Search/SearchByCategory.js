import Container from "../shared/Container";
import Button from "../shared/Button";
import ArticleItem from "../ArticleItem";
import SearchHeader from "./SearchHeader";
import { useDispatch, useSelector } from "react-redux";
import { actSearchPostsByCategoriesAsync } from "../../store/search/actions";
import { generateCategoryHashKey } from "../../store/categories/reducer";
import { useEffect } from "react";
import { useState } from "react";

const perPage = 2;
const styleObj = {"textAlign": "center", "padding": "30px 0 0 0"};

export default function SearchByCategory({ id }) {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const categoriesHashObj = useSelector((state) => state.categories.categoriesHashObj);
  const postsPaging = useSelector((state) => state.search.searchPosts.postsPaging);
  const totalPage = useSelector((state) => state.search.searchPosts.totalPage);
  const totalPosts = useSelector((state) => state.search.searchPosts.totalPosts);
  const currentPage = useSelector((state) => state.search.searchPosts.currentPage);

  const hasMorePosts = postsPaging.length < totalPosts;

  const handleLoadMore = () => {
    if (isLoading) {
      return;
    }

    if (currentPage < totalPage) {
      setIsLoading(true);
      dispatch(actSearchPostsByCategoriesAsync(currentPage + 1, perPage, id));
    }
  };

  useEffect(() => {
    dispatch(actSearchPostsByCategoriesAsync(1, perPage, id));
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(false);
  }, [postsPaging]);

  if (!categoriesHashObj) {
    return <h3 style={styleObj}>Đang tải . . . </h3>; 
  }

  let categoryObj = categoriesHashObj[generateCategoryHashKey(id)];
  
  if (!categoryObj) {
    return <h3 style={styleObj}>Không có kết quả phù hợp</h3>;
  }

  let arraySearchPosts = null;
  arraySearchPosts = postsPaging.map((post, index) => {
    return (
      <div key={index} className="tcl-row tcl-jc-center">
        <div className="tcl-col-12 tcl-col-md-8">
          <ArticleItem isStyleCard isShowCategoies post={post} />
        </div>
      </div>
    );
  });

  return (
    <div className="articles-list section">
      <Container>
        <SearchHeader totalPosts={ totalPosts } currentShowing={ postsPaging.length } categoryName={ categoryObj.name } />
        { arraySearchPosts }
        { hasMorePosts && (
          <div className="text-center">
            <Button
              size="large"
              variant="primary"
              onClick={ handleLoadMore }
              loading={ isLoading }
            >
              Tải thêm
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}