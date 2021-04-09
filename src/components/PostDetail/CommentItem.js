import CommentAvatar from "./CommentAvatar";

export default function CommentItem(props) {
  return (
    <div className="comments__section">
      <CommentAvatar />
      <div className="comments__section--content">
        <a href="#" className="comments__section--user">
          John Smith
        </a>
        <p className="comments__section--time">2 minutes ago</p>
        <p className="comments__section--text">Lorem ipsum dolor sit, amet?</p>
        {/* <i class="ion-reply comments__section--reply"></i> */}
      </div>
    </div>
  );
}
