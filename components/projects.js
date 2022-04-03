import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ProjectsList() {
  return (
    <section className="projects__section">
      <div className="container">
        <span>🔥 MÉTODOS VALIDADOS</span>
        <h1>Dezenas de projetos entregando performance e resultados</h1>

        <div className="projects">
          <div className="project__item cfb7 rounded-lg">
            <div className="pj__content">
              <h3>Hype Theme</h3>
            </div>
          </div>

          <div className="project__item zapily rounded-lg">
            <div className="pj__content">
              <h3>Zapily</h3>
            </div>
          </div>

          <div className="project__item anonimatta">
            <div className="pj__content">
              <h3>Anonimatta</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Link href="/works">
          <a className="classic__link">
            Ver mais projetos <FiArrowRight />
          </a>
        </Link>
      </div>
    </section>
  );
}
