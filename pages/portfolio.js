import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer";

import Header from "../components/header";

import Carousel from "react-elastic-carousel";

export default function Portfolio() {
  const breakPoints = [{ width: 1200, itemsToShow: 4 }];

  return (
    <div className="contato">
      <Head>
        <title>Portfólio — Scafeli</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <Carousel
        breakPoints={breakPoints}
        // enableAutoPlay={true}
        enableMouseSwipe={true}
        enableSwipe={true}
        // showArrows={false}
        itemPadding={[0, 5, 0, 5]}
      >
        <div>
          <img src="portfolio/photos/001.jpg" />
        </div>
        <div>
          <img src="portfolio/photos/001.jpg" />
        </div>
        <div>
          <img src="portfolio/photos/001.jpg" />
        </div>
        <div>
          <img src="portfolio/photos/001.jpg" />
        </div>
        <div>
          <img src="portfolio/photos/001.jpg" />
        </div>
        <div>
          <img src="portfolio/photos/001.jpg" />
        </div>
        <div>
          <img src="portfolio/photos/001.jpg" />
        </div>
        <div>
          <img src="portfolio/photos/001.jpg" />
        </div>
      </Carousel>

      <Footer />
    </div>
  );
}
