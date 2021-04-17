export default function ArticleItemDesc({ description }) {
  return (
    <p className="article-item__desc">{ trimString(description) }</p>
  )
}

function trimString(str, numberOfWords = 26) {
  str = str.substring(3, str.length - 4);
  let numberOfSpaces = 0;
  let len = str.length;
  let endIndex = 0;

  for (let i = 0; i < len; ++i) {
    if (str[i] === ' ') {
      numberOfSpaces += 1;
    }
    if (numberOfSpaces === (numberOfWords - 1)) {
      endIndex = i + 1;
    }
  }

  if (numberOfSpaces <= (numberOfWords - 1)) {
    return str;
  }
  return str.substring(0, endIndex) + "...";
}