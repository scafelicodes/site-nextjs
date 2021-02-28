import Head from "next/head";
import Image from "next/image";

import { Container, Row, Col } from "react-bootstrap";

export default function Bio() {
  return (
    <>
      <Head>
        <title>BIO - ESTÚDIO NITERÓI | NTR®</title>
      </Head>

      <Container className="bio">
        <div className="text-center">
          <Image
            src="/perfil-bio.png"
            alt="Estúdio Niterói"
            width={100}
            height={100}
            className="perfil-bio"
          />

          <h1>
            Estúdio Niterói - NTR® <i class="fas fa-check-circle"></i>
          </h1>
          <p>BRANDING, CONTEÚDO & MARKETING</p>
        </div>

        <ul>
          <li>
            <a target="_blank" href="http://bit.ly/orcamentoestudioniteroi">
              <i class="fab fa-whatsapp"></i> Quero um orçamento
            </a>
          </li>

          <li>
            <a target="_blank" href="https://herocontent.com.br">
              <i class="fas fa-mask"></i> Método Hero Content
            </a>
          </li>

          <li>
            <a target="_blank" href="https://estudioniteroi.com.br">
              <i class="fas fa-tv"></i> Nosso site
            </a>
          </li>

          <li>
            <a target="_blank" href="http://bit.ly/playlistntr">
              <i class="fab fa-spotify"></i> Nossa playlist
            </a>
          </li>
        </ul>
      </Container>
    </>
  );
}
