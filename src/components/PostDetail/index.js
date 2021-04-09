import "./post-detail.css";
import "./related-posts.css";
import "./comments.css";
import PostDetailHeader from "./PostDetailHeader";
import PostDetailContentWrapper from "./PostDetailContentWrapper";

export default function PostDetail(props) {
  return (
    <main className="post-detail">
      <div className="spacing" />
      <PostDetailHeader />
      <div className="spacing" />
      <PostDetailContentWrapper />
    </main>
  );
}
