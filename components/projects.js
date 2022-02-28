import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ProjectsList() {
  return (
    <section className="projects__section">
      <div className="container">
        <h1>What I've been working on</h1>
        <p>
          I like to stay busy and always have a project in the works. Take a
          look at some of the applications, articles, and companies I've
          dedicated my time to.
        </p>
        <div className="projects">
          <div className="project__item cfb7 rounded-lg">
            <div className="pj__content">
              <h3>Hype Theme</h3>
              <p>WordPress • Development</p>
            </div>
          </div>

          <div className="project__item zapily rounded-lg">
            <div className="pj__content">
              <h3>Zapily</h3>
              <p>SaaS • B2C • B2B</p>
            </div>
          </div>

          <div className="project__item anonimatta">
            <div className="pj__content">
              <h3>Anonimatta</h3>
              <p>SaaS • Digital Content</p>
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
        <Link href="/works">
          <a className="classic__link">
            More projects <FiArrowRight />
          </a>
        </Link>
      </div>
    </section>
  );
}
