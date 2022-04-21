import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";

import ProjectsList from "../../components/projects";

export default function Projetos() {
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
                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>
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
                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>
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
                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>
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
                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>

                <div
                  className="work-item"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1556793313-2e9460949ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                  }}
                ></div>
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
