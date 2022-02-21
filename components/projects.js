import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ProjectsList() {
  return (
    <section className="projects__section">
      <div className="container">
        <h1>Projects</h1>
        <div className="projects">
          <div className="project__item cfb7 rounded-lg">
            <div className="pj__content">
              <h3>Big Brain Education</h3>
              <p>Microsoft Partner - Startup</p>
            </div>
          </div>

          <div className="project__item zapily rounded-lg">
            <div className="pj__content">
              <h3>Zapily</h3>
              <p>Personal Project - SaaS</p>
            </div>
          </div>

          <div className="project__item anonimatta">
            <div className="pj__content">
              <h3>Anonimatta</h3>
              <p>Virtual Magazine</p>
            </div>
          </div>

          {/* <div className="project__item adidas rounded-lg">
            <div className="pj__content">
              <h3>Adidas</h3>
              <p>Desenvolvimento Web</p>
            </div>
          </div> */}

          {/* <div className="project__item anonimatta rounded-lg">
            <p className="lead">Anonimatta</p>
          </div>

          <div className="project__item zapily rounded-lg">
            <p className="lead">Orbital iPad Mockup</p>
          </div> */}
        </div>
      </div>

      <div className="container">
        <Link href="/projetos">
          <a className="classic__link">
            More projects <FiArrowRight />
          </a>
        </Link>
      </div>
    </section>
  );
}
