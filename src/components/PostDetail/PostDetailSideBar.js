import PostDetailSideBarPostAuthor from "./PostDetailSideBarPostAuthor";
import PostDetailSideBarRelatedPosts from "./PostDetailSideBarRelatedPosts";

export default function PostDetailSideBar(props) {
  return (
    <div className="post-detail__side">
      <PostDetailSideBarPostAuthor />
      <div className="spacing" />
      <PostDetailSideBarRelatedPosts />
    </div>
  );
}
