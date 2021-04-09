import RelatedPostItem from "./RelatedPostItem";

export default function PostDetailSideBarRelatedPosts(props) {
  return (
    <div className="related-post">
      <h2 className="related-post__head">Related Posts</h2>
      <RelatedPostItem />
      <RelatedPostItem />
      <RelatedPostItem />
    </div>
  );
}
