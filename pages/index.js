import Header from "./../components/header";
import Footer from "./../components/footer";
import Hero from "./../components/hero";
import About from "./../components/about";

import { Container, Row, Col } from "react-bootstrap";

export default function Index() {
  return (
    <>
      <Header />
      <Hero />

      <About />
      <section className="about">
        <Container>
          <Row className="d-flex align-items-center">
            <Col md={6}></Col>
            <Col md={6}></Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}
