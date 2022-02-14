import Link from "next/link";

export default function ProjectsList() {
  return (
    <section className="projects__section">
      <div className="container">
        <div className="projects">
          <div className="project__item cfb7 rounded-lg">
            <div className="pj__content">
              <h3>CFB7 Brasil</h3>
              <p>Audiovisual • Social Media</p>
            </div>
          </div>

          <div className="project__item zapily rounded-lg">
            <div className="pj__content">
              <h3>Zapily</h3>
              <p>Desenvolvimento Web • Social Media</p>
            </div>
          </div>

          <div className="project__item befit rounded-lg">
            <div className="pj__content">
              <h3>Academia Be Fit</h3>
              <p>Audiovisual • Social Media</p>
            </div>
          </div>

          <div className="project__item adidas rounded-lg">
            <div className="pj__content">
              <h3>Adidas</h3>
              <p>Desenvolvimento Web</p>
            </div>
          </div>

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
          <a className="default__btn">Ver mais projetos</a>
        </Link>
      </div>
    </section>
  );
}
