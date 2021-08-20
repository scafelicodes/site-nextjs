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
            <Col md={6}>
              {/* <img src="xp.svg" /> */}
              {/* <p>Entregamos experiências, não anúncios.</p> */}
              <h3>
                Criamos parcerias para fornecer conteúdos incríveis e campanhas
                publicitárias com resultados reais.
              </h3>
              <p>
                Desde 2014, já são centenas de clientes atendidos em todo o
                mundo e mais de 1 bilhão de pessoas impactadas pelo nosso
                trabalho.
              </p>
              <p>É apenas o começo.</p>
            </Col>
            <Col md={6}>
              <img src="home-img.jpg" />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
