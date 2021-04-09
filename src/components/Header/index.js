import "./header.css";
import Container from "./../shared/Container";
import Col from "./../shared/Col";
import HeaderLogo from "./HeaderLogo";
import SearchForm from "./SearchForm";
import HeaderNavigation from "./HeaderNavigation";

export default function Header() {
  return (
    <header id="header">
      <Container>
        <div className="tcl-row tcl-no-gutters header">
          <Col xs={2}>
            <HeaderLogo />
          </Col>
          <Col xs={4}>
            <SearchForm />
          </Col>
          <Col xs={6}>
            <HeaderNavigation />            
          </Col>
        </div>
      </Container>
    </header>
  );
}
