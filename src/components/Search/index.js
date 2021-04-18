import Container from "./../shared/Container";
import Button from "./../shared/Button";
import ArticleItem from "./../ArticleItem";
import SearchHeader from "./SearchHeader";

export default function Search(props) {
  return (
      <div className="articles-list section">
        <Container>
          <SearchHeader />
          <div className="tcl-row tcl-jc-center">
            <div className="tcl-col-12 tcl-col-md-8">
              <ArticleItem isStyleCard isShowCategoies />
            </div>
          </div>
          <div className="tcl-row tcl-jc-center">
            <div className="tcl-col-12 tcl-col-md-8">
              <ArticleItem isStyleCard isShowCategoies />
            </div>
          </div>
          <div className="text-center">
            <Button size="large" variant="primary">
              Tải thêm
            </Button>
          </div>
        </Container>
      </div>
  );
}