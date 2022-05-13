import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Servicos() {
  return (
    <div className="contato">
      <Head>
        <title>Serviços — Scafeli</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />

      <div className="container">
        <h1 className="title-services-page">O que fazemos</h1>
      </div>

      <div className="container">
        <div className="row service-item align-items-center">
          <div className="col-md-6">
            <img src="marketing.jpg" />
          </div>

          <div className="col-md-6">
            <h1>Marketing</h1>
            <p></p>
            <ul>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Marketing Digital
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Anúncios Patrocinados
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Gestão de Mídias
                Sociais
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Projetos Web
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Marketing de
                Influência
              </li>
            </ul>
          </div>
        </div>

        <div className="row service-item align-items-center">
          <div className="col-md-6">
            <img src="audiovisual.jpg" />
          </div>

          <div className="col-md-6">
            <h1>Audiovisual</h1>
            <p></p>

            <ul>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Produção Executiva
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Set Design
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Fashion Films
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Lookbook
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Fotografia Still
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Vídeos Institucionais
              </li>
            </ul>
          </div>
        </div>

        <div className="row service-item align-items-center">
          <div className="col-md-6">
            <img src="branding.jpg" />
          </div>

          <div className="col-md-6">
            <h1>Branding</h1>
            <p></p>
            <ul>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Identidade
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Gestão de Marca
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Naming
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Campanhas
              </li>
              <li>
                <i class="fa-solid fa-chevron-right"></i> Expansão de Marca
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="row align-items-center">
          <div className="col-md-6">
            <img src="about.jpg" />
          </div>

          <div className="col-md-6">
            <h1>Design</h1>
            <p></p>
            <ul>
              <li>Direção Criativa</li>
              <li>Tipografia</li>
              <li>Catálogos</li>
              <li>Embalagens</li>
            </ul>
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  );
}
