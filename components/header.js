import Head from "next/head";
import { Container } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Head>
        <title>Estúdio Niterói</title>
      </Head>

      <header>
        <Container>
          <h3>Estúdio Niterói - NTR®</h3>
          <p className="lead">BRANDING + CONTEÚDO + MARKETING</p>
        </Container>
      </header>
    </>
  );
}
