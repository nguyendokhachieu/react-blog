import Container from "./../components/shared/Container";
import { Link } from "react-router-dom";

const styleObj = { 
    display: "inline-block",
    padding: "15px 25px",
    border: "1px solid #007bff",
    borderRadius: "10px",
 };

export default function NotFoundPage(props) {
  return (
    <Container>
      <div className="tcl-row tcl-jc-center">
        <div className="tcl-col-12 tcl-col-md-8">
          <img src="/assets/images/404NotFound.jpg" alt="404 Page not found" />
        </div>
      </div>
      <Container>
        <div className="text-center" style={{ padding: "50px 0 0 0" }}>
          <Link to="/" style={styleObj}>
            Go to Home
          </Link>
        </div>
      </Container>
    </Container>
  );
}
