import "./footer.css";
import Container from "./../shared/Container";
import Row from "./../shared/Row";
import FooterLogo from "./FooterLogo";
import FooterCopyright from "./FooterCopyright";
import FooterCategories from "./FooterCategories";
import FooterContact from "./FooterContact";
import FooterMedia from "./FooterMedia";

export default function Footer() {
  return (
    <footer id="footer" className="bg-white footer">
      <Container>
          <Row>
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
              <FooterLogo />
              <FooterCopyright />
            </div>
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-2">
              <FooterCategories />
            </div>
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
              <FooterContact />
            </div>
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-4">
              <FooterMedia />
            </div>
          </Row>
      </Container>
    </footer>
  );
}
