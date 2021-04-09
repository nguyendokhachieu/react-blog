import {Link} from "react-router-dom";

export default function HeaderLogo(props) {
  return (
    <div className="header-logo">
      <Link to="/">
        <img src="/assets/images/logo.png" alt="Go to homepage" />
      </Link>
    </div>
  );
}
