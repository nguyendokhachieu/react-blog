export default function ArticleItemDesc({ description }) {
  return <p className="article-item__desc">{ trimString(description) }</p>;
}

function trimString(str) {
  let initStr = str;
  let shortStr = str
    .replace("<p>", "")
    .replace("</p>", "")
    .split(" ")
    .slice(0, 20)
    .join(" ");
  return (shortStr === initStr) ? initStr : (shortStr + "...");
}
