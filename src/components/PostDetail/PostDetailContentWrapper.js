import Container from "./../shared/Container";
import PostDetailThumbnail from "./PostDetailThumbnail";
import PostDetailRichTextEditor from "./PostDetailRichTextEditor";
import PostDetailTags from "./PostDetailTags";
import PostDetailCommentSection from "./PostDetailCommentSection";
import PostDetailSideBar from "./PostDetailSideBar";

export default function PostDetailContentWrapper(props) {
  return (
    <div className="post-detail__fluid">
      <Container>
        <div className="post-detail__wrapper">
          <div className="post-detail__content">
            <PostDetailThumbnail />
            <div className="content-padding">
              <PostDetailRichTextEditor />
              <PostDetailTags />
              <PostDetailCommentSection />
            </div>
          </div>
          <PostDetailSideBar />
        </div>
      </Container>
    </div>
  );
}
