import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <header>
        <Container>
          <Row>
            <Col md={4}>Scafeli</Col>
          </Row>
        </Container>
      </header>
    </>
  );
}
