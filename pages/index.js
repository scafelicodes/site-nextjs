import Head from "next/head";
import Image from "next/image";

import { Container, Row, Col } from "react-bootstrap";

export default function Index() {
  return (
    <>
      <Head>
        <title>ESTÚDIO NITERÓI - BRANDING, CONTEÚDO & MARKETING</title>
        <link
          rel="shortcut icon"
          href="https://estudioniteroi.com.br/fav.png"
        />
      </Head>

      <section className="hero d-flex align-items-center">
        <Container>
          <div className="text-center">
            <Image
              src="/logo.png"
              alt="Estúdio Niterói"
              width={50}
              height={50}
              className="perfil-bio"
            />

            <h3>Estúdio Niterói</h3>
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
