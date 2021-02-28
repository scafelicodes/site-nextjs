import Head from "next/head";

import { Container, Row, Col } from "react-bootstrap";

export default function Index() {
  return (
    <>
      <Head>
        <title>ESTÚDIO NITERÓI - BRANDING, CONTEÚDO & MARKETING</title>
      </Head>

      <section className="hero d-flex align-items-center">
        <Container>
          <div className="text-center">
            <h3>Estúdio Niterói - NTR®</h3>
            <p>BRANDING, CONTEÚDO & MARKETING</p>

            <a
              className="link-default"
              target="_blank"
              href="http://bit.ly/orcamentoestudioniteroi"
            >
              Solicite um orçamento
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
