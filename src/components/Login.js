import Input from "./shared/Input";
import Button from "./shared/Button";
import Container from "./shared/Container";
import Row from "./shared/Row";

export default function Login(props) {
  return (
    <main className="login">
      <div className="spacing" />
      <Container>
        <Row>
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Login</h1>
            <div className="form-login-register">
              <form action>
                <Input
                  labelText="Username"
                  placeholder="Enter your username "
                />
                <Input
                  placeholder="Enter your password "
                  labelText="Password"
                />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button size="large" variant="primary">
                    Submit
                  </Button>
                  <a href="register.html">Regiter</a>
                </div>
              </form>
            </div>
          </div>
        </Row>
      </Container>
    </main>
  );
}
