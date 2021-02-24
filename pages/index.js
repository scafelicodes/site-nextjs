import Header from "../components/header";

import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Header />

      <section className="section-hero">
        <Container></Container>
      </section>

      <section className="section-services">
        <Container>
          <h1>Serviços</h1>

          <Row>
            <Col md={4}>
              <div className="item-service">
                <h2>Branding</h2>
                <ul>
                  <li>Inovação</li>
                  <li>Design de Serviços</li>
                  <li>Propósito de Marca</li>
                  <li>Posicionamento estratégico</li>
                  <li>User Experience (UX)</li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="item-service">
                <h2>Conteúdo</h2>
                <ul>
                  <li>Conteúdo para Redes Sociais</li>
                  <li>Produção de Vídeos</li>
                  <li>Conteúdo para Blogs</li>
                  <li>Copywriting (sites, blogs e lojas)</li>
                  <li>Fotografia</li>
                </ul>
              </div>
            </Col>

            <Col md={4}>
              <div className="item-service">
                <h2>Marketing</h2>
                <ul>
                  <li>Gestão de Redes Sociais</li>
                  <li>Gestão de Anúncios (Google e Facebook)</li>
                  <li>Criação de sites</li>

                  <li>Criação de lojas virtuais</li>
                </ul>
              </div>
            </Col>
          </Row>

          <div className="cta-services text-center">
            <h2>Vamos começar?</h2>
            <a className="link-default" href="#">
              Solicite um orçamento
            </a>
          </div>
        </Container>
      </section>

      <section>
        <Container></Container>
      </section>

      <footer>
        <Container>
          <p>Estúdio Niterói - NTR®</p>
        </Container>
      </footer>
    </>
  );
}
