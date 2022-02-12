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

      <section className="presentation">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <p>Quem somos</p>
              <h1>
                A Scafeli é uma agência digital que oferece uma ampla gama de
                serviços criativos, incluindo desenvolvimento web, marketing
                digital e produção audiovisual.
              </h1>
            </div>

            <div className="col-md-3">
              <p>O que fazemos</p>

              <ul>
                <li>Produção de Conteúdo</li>
                <li>Gestão de Redes Sociais</li>
                <li>Criação de sites e lojas virtuais</li>
                <li>Lançamento de Produtos Digitais</li>
                <li>Fotos e vídeos para e-commerce</li>
                <li>Produção Audiovisual</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
