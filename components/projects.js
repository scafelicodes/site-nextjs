import Head from "next/head";
import Link from "next/link";
import Carousel from "react-multi-carousel";

import { FiArrowRight } from "react-icons/fi";

export default function ProjectsList() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="projects__section">
      <div className="">
        <span>🔥 MÉTODOS VALIDADOS</span>
        <h1>Dezenas de projetos entregando performance e resultados</h1>

        <Carousel
          className="projects"
          autoPlay
          autoPlaySpeed={5000}
          infinite
          responsive={responsive}
        >
          <div className="project__item cfb7 rounded-lg">
            {/* <div className="pj__content">
              <h3>CFB7 Brasil</h3>
            </div> */}
          </div>

          <div className="project__item zapily rounded-lg">
            {/* <div className="pj__content">
              <h3>Zapily</h3>
            </div> */}
          </div>

          <div className="project__item disney">
            {/* <div className="pj__content">
              <h3>Disney+</h3>
            </div> */}
          </div>

          <div className="project__item anonimatta">
            {/* <div className="pj__content">
              <h3>Anonimatta</h3>
            </div> */}
          </div>

          <div className="project__item queromed">
            {/* <div className="pj__content">
              <h3>QueroMed</h3>
            </div> */}
          </div>

          <div className="project__item attech">
            {/* <div className="pj__content">
              <h3>Attech</h3>
            </div> */}
          </div>
        </Carousel>
      </div>

      <div className="container">
        <Link href="/trabalhos">
          <a className="classic__link">
            Ver mais projetos <FiArrowRight />
          </a>
        </Link>
      </div>
    </section>
  );
}
