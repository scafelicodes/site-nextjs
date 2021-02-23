import Image from "next/image";

import { Container, Row, Col } from "react-bootstrap";

export default function Bio() {
  return (
    <>
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
          <p>BRANDING + CONTEÚDO + MARKETING</p>
        </div>

        <ul>
          <li>
            <a target="_blank" href="https://estudioniteroi.com.br">
              <i class="fas fa-tv"></i> Nosso site
            </a>
          </li>

          <li>
            <a
              target="_blank"
              href="https://wa.me/5521964105305?text=Olá,%20eu%20gostaria%20de%20fazer%20um%20orçamento%20:)"
            >
              <i class="fab fa-whatsapp"></i> Quero um orçamento
            </a>
          </li>

          <li>
            <a target="_blank" href="https://herocontent.com.br">
              <i class="fas fa-mask"></i> Método Super Hero
            </a>
          </li>

          <li>
            <a
              target="_blank"
              href="https://open.spotify.com/playlist/3SwleoCoi8mq0pVXpDhx4N?si=9Crw5qBlQ0y1-rBvjHrsjg"
            >
              <i class="fab fa-spotify"></i> Nossa playlist
            </a>
          </li>
        </ul>
      </Container>
    </>
  );
}
