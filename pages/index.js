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

      {/* <About /> */}
      <section>
        <Container>
          <Row className="d-flex align-items-center">
            <Col md={6}></Col>
            <Col md={6}></Col>
          </Row>
        </Container>
      </section>

      <section>
        <div className="container">
          <div className="projects">
            <div className="project__item">
              <p className="lead">Ipsum Dev</p>
            </div>

            <div className="project__item zapily">
              <p className="lead">Zapily.io</p>
            </div>

            <div className="project__item">
              <p className="lead">Hyped WooCommerce</p>
            </div>

            <div className="project__item">
              <p className="lead">Orbital iPad Mockup</p>
            </div>

            <div className="project__item">
              <p className="lead">Orbital iPad Mockup</p>
            </div>

            <div className="project__item">
              <p className="lead">Orbital iPad Mockup</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
