import { useEffect, useState } from "react";

export default function NewsListMainTitle(props) {
  const [isShowButton, setIsShowButton] = useState(false);

  useEffect(() => {
    setIsShowButton(props.isShowButton);
  }, [props.isShowButton]);
  
  return (
    <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
      <h2>{props.children}</h2>
      {isShowButton ? (
        <a href="#" className="btn btn-default">
          View More
        </a>
      ) : null}
    </div>
  );
}
