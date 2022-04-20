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
      <div className="projetos">
        <Header />

        <ProjectsList />

        <Footer />
      </div>
    </>
  );
}
