import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";

import _map from "lodash/map";

// import ProjectsList from "../../components/projects";

export default function Projetos() {
  const photo = [
    {
      title: "Projeto 1",
      src: "/portfolio/photos/001.jpg",
    },
    {
      title: "Projeto 2",
      src: "/portfolio/photos/002.jpg",
    },
    {
      title: "Projeto 3",
      src: "/portfolio/photos/003.jpg",
    },
    {
      title: "Projeto 4",
      src: "/portfolio/photos/004.jpg",
    },
    {
      title: "Projeto 5",
      src: "/portfolio/photos/005.jpg",
    },
    {
      title: "Projeto 6",
      src: "/portfolio/photos/006.jpg",
    },
    {
      title: "Projeto 7",
      src: "/portfolio/photos/007.jpg",
    },
    {
      title: "Projeto 8",
      src: "/portfolio/photos/008.jpg",
    },
    {
      title: "Projeto 9",
      src: "/portfolio/photos/009.jpg",
    },
    {
      title: "Projeto 10",
      src: "/portfolio/photos/010.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Trabalhos - Scafeli</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <section className="works-page">
        <div className="container">
          <h1>Trabalhos</h1>
        </div>

        <div className="container">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <a
                class="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Fotografia
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Audiovisual
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Redes Sociais
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="webdesign-tab"
                data-toggle="tab"
                href="#webdesign"
                role="tab"
                aria-controls="webdesign"
                aria-selected="false"
              >
                Web Design
              </a>
            </li>
          </ul>
        </div>

        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div>
              <div className="work-list">
                {_map(photo, (item) => (
                  <div
                    className="work-item"
                    style={{
                      background: `url(${item.src}) center center / cover no-repeat`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div>
              <div className="work-list">
                {_map(photo, (item) => (
                  <div
                    className="work-item"
                    style={{
                      background: `url(${item.src}) center center / cover no-repeat`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div>
              <div className="work-list">
                {_map(photo, (item) => (
                  <div
                    className="work-item"
                    style={{
                      background: `url(${item.src}) center center / cover no-repeat`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="webdesign"
            role="tabpanel"
            aria-labelledby="webdesign-tab"
          >
            <div>
              <div className="work-list">
                {_map(photo, (item) => (
                  <div
                    className="work-item"
                    style={{
                      background: `url(${item.src}) center center / cover no-repeat`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <ProjectsList /> */}
      </section>
      <Footer />
    </>
  );
}
