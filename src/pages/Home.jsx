import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../styles/Home.css";
import AtmCard from "../components/cards/AtmCard"
import ReviewCard from "../components/cards/ReviewCard";


function Home() {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col className="mb-4" sm={8}>
            <Card style={{ width: "100%" }}>
              <Card.Body className="d-flex justify-content-center">
                <ReviewCard />
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card style={{ width: "100%" }}>
              <Card.Body className="d-flex justify-content-center">
                <AtmCard />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-4" sm>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
