import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={4}>
            <h3>Vamos criar?</h3>
          </Col>
          <Col md={4}>
            <h3>Vagas</h3>
          </Col>
          <Col md={4}>
            <h3>Fale conosco</h3>
          </Col>

          <Col md={12}>
            <p>© 2021 Estúdio Niterói.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
