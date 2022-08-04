import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Servicos() {
  return (
    <div className="contato">
      <Head>
        <title>Serviços: Veja como o Gustavo Scafeli pode te ajudar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />

      <div className="container">
        <div className="services-page">
          <div className="services-title">
            <span>Serviços</span>
            <h1>Como podemos te ajudar</h1>
          </div>

          <div className="services-blocks">
            <div className="service-block">
              <h2>Inbound Marketing</h2>
              <ul>
                <li>
                  <img src="check.svg" />
                  Consultoria de Inbound Marketing
                </li>
                <li>
                  <img src="check.svg" /> Marketing de Conteúdo
                </li>
                <li>
                  <img src="check.svg" /> Email Marketing
                </li>
                <li>
                  <img src="check.svg" /> Criação de Ebooks
                </li>
                <li>
                  <img src="check.svg" /> Gerenciamento de RD Station
                </li>
              </ul>
            </div>

            <div className="service-block">
              <h2>SEO</h2>
              <ul>
                <li>
                  <img src="check.svg" /> Consultoria de SEO
                </li>
                <li>
                  <img src="check.svg" /> Auditoria de SEO
                </li>
                <li>
                  <img src="check.svg" /> SEO para E-commerce
                </li>
                <li>
                  <img src="check.svg" /> Conteúdo para E-Commerce
                </li>
                <li>
                  <img src="check.svg" /> Conteúdo para Blogs e Sites
                </li>
                <li>
                  <img src="check.svg" /> Migração de SEO
                </li>
                <li>
                  <img src="check.svg" /> Migração de SEO
                </li>
              </ul>
            </div>

            <div className="service-block">
              <h2>Performance</h2>
              <ul>
                <li>
                  <img src="check.svg" /> Google Ads
                </li>
                <li>
                  <img src="check.svg" /> Facebook Ads
                </li>
                <li>
                  <img src="check.svg" /> Remarketing no Google
                </li>
                <li>
                  <img src="check.svg" /> Remarketing no Facebook
                </li>
                <li>
                  <img src="check.svg" /> Native Ads
                </li>
                <li>
                  <img src="check.svg" /> Outbrain
                </li>
                <li>
                  <img src="check.svg" /> Taboola
                </li>
              </ul>
            </div>

            <div className="service-block">
              <h2>Lançamentos</h2>
              <ul>
                <li>
                  <img src="check.svg" /> Lançamento de Infoprodutos
                </li>
                <li>
                  <img src="check.svg" /> Lançamento de Experts
                </li>
                <li>
                  <img src="check.svg" /> Lançamento Semente
                </li>
                <li>
                  <img src="check.svg" /> Lançamento Interno
                </li>
              </ul>
            </div>

            <div className="service-block">
              <h2>Criação e Desenvolvimento</h2>
              <ul>
                <li>
                  <img src="check.svg" /> Criação de Sites
                </li>
                <li>
                  <img src="check.svg" /> Criação de WordPress
                </li>
                <li>
                  <img src="check.svg" /> Criação de Landing Pages
                </li>
                <li>
                  <img src="check.svg" /> Criação de lojas virtuais
                </li>
              </ul>
            </div>

            <div className="service-block">
              <h2>E-commerce</h2>
              <ul>
                <li>
                  <img src="check.svg" /> SEO Para E-commerce
                </li>
                <li>
                  <img src="check.svg" /> Inbound Commerce
                </li>
                <li>
                  <img src="check.svg" /> Mídia de Performance
                </li>
                <li>
                  <img src="check.svg" /> Conteúdo Para E-commerce
                </li>
                <li>
                  <img src="check.svg" /> Monitoramento de E-commerce
                </li>
              </ul>
            </div>

            <div className="service-block">
              <h2>Audiovisual</h2>
              <ul>
                <li>
                  <img src="check.svg" /> Produção Executiva
                </li>
                <li>
                  <img src="check.svg" /> Set Design
                </li>
                <li>
                  <img src="check.svg" /> Fashion Films
                </li>
                <li>
                  <img src="check.svg" /> Lookbook
                </li>
                <li>
                  <img src="check.svg" /> Fotografia Still
                </li>
                <li>
                  <img src="check.svg" /> Vídeos Institucionais
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
