import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import CommentShowHiddenReplies from "./CommentShowHiddenReplies";

export default function PostDetailCommentSection(props) {
  return (
    <div className="post-detail__comments">
      <CommentForm />
      <p>20 Comments</p>
      <ul className="comments">
        <li className="item">
          <CommentItem />
          {/* Reply Comments */}
          <ul className="comments">
            <li className="item">
              <CommentItem />
            </li>
            <li className="item">
              <CommentItem />
            </li>
          </ul>
          {/* Reply form */}
          <CommentForm />
        </li>
        <li className="item">
          <CommentItem />
          <CommentShowHiddenReplies />
        </li>
        <li className="item">
          <CommentItem />
        </li>
      </ul>
    </div>
  );
}
