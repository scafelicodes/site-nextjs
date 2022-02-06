import Header from "./../components/header";
import Footer from "./../components/footer";
import Hero from "./../components/hero";

import Link from "next/dist/client/link";

import ProjectsList from "../components/projects";

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

      <ProjectsList />

      <div className="container">
        <Link href="/projetos">
          <a>Ver mais projetos</a>
        </Link>
      </div>

      <Footer />
    </>
  );
}
