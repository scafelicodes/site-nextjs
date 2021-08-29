import Head from "next/head";
import Image from "next/image";

import Header from "./../components/header";
import Footer from "./../components/footer";
import Hero from "./../components/hero";

import { Container, Row, Col } from "react-bootstrap";

export default function Index() {
  return (
    <>
      <Header />
      <Hero />
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
