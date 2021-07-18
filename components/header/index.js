import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <header>
        <Container>
          <Row>
            <Col md={4}>Estúdio Niterói</Col>
          </Row>
        </Container>
      </header>
    </>
  );
}
