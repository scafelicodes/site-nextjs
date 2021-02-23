import Head from "next/head";
import { Container } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Head>
        <title>Estúdio Niterói</title>
      </Head>

      <header>
        <Container>header</Container>
      </header>
    </>
  );
}
