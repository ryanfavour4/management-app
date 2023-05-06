import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="bg-dark footer text-light">
      <Container fluid>
        <Row>
          <Col md="6" className="py-3">
            <p>&copy; 2023 Company Name. All Rights Reserved.</p>
          </Col>
          <Col md="6" className="py-3 text-end">
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="#">Privacy Policy</Link>
              </li>
              <li className="list-inline-item">
                <Link to="#">Terms &amp; Conditions</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
