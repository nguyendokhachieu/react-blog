import CommentAvatar from "./CommentAvatar";
import Button from "./../shared/Button";

export default function CommentForm(props) {
  return (
    <div className="comments__form">
      <div className="comments__form--control">
        <CommentAvatar />
        <textarea name defaultValue={""} />
      </div>
      <div className="text-right">
        <Button variant="default">Submit</Button>
      </div>
    </div>
  );
}
