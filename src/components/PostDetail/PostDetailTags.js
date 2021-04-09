import Button from "./../shared/Button";

export default function PostDetailTags(props) {
  return (
    <div className="post-detail__tags">
      <h2>Tags</h2>
      <ul>
        <li className="item">
          <Button type="link" href="#" variant="default">
            HTML
          </Button>
        </li>
        <li className="item">
          <Button type="link" href="#" variant="default">
            CSS
          </Button>
        </li>
        <li className="item">
          <Button type="link" href="#" variant="default">
            JS
          </Button>
        </li>
      </ul>
    </div>
  );
}
