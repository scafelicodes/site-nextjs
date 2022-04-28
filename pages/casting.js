import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer";

import Header from "../components/header";

export default function Casting() {
  return (
    <div className="contato">
      <Head>
        <title>Casting — Scafeli</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <Footer />
    </div>
  );
}
