import { useRouteMatch } from "react-router";
import PostDetail from "./../components/PostDetail";

export default function PostDetailPage(props) {
  const match = useRouteMatch();
  const {slug} = match.params;
  
  console.log(slug);

  return <PostDetail></PostDetail>;
}
