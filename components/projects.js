import Link from "next/link";

export default function ProjectsList() {
  return (
    <section className="projects__section">
      <div className="max-w-7xl mx-auto">
        <div className="projects">
          <div
            className="project__item cfb7 rounded-lg"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <p className="lead">CFB7 Brasil</p>
          </div>

          <div
            className="project__item zapily rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <p className="lead">Zapily Catálogos</p>
          </div>

          <div
            className="project__item befit rounded-lg"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <p className="lead">Academia Be Fit</p>
          </div>

          <div
            className="project__item adidas rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <p className="lead">Adidas</p>
          </div>

          {/* <div className="project__item anonimatta rounded-lg">
            <p className="lead">Anonimatta</p>
          </div>

          <div className="project__item zapily rounded-lg">
            <p className="lead">Orbital iPad Mockup</p>
          </div> */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <Link href="/cases">
          <a className="dft-btn inline-block text-center rounded-md py-3 px-8 font-medium text-white">
            Ver cases
          </a>
        </Link>
      </div>
    </section>
  );
}
