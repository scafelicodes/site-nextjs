import Link from "next/link";

export default function Links() {
  return (
    <div className="bio-page-scafeli">
      <div className="container bio">
        <div className="text-center">
          <img className="logo-header" src="scafeli-dark.svg" height={30} />
          <h1 className="">
            Scafeli
            {/* <img src="verified.svg" height={30} /> */}
          </h1>
          <p className="text-bio">Marketing + Audiovisual</p>
        </div>

        <ul>
          <li>
            <a href="https://bit.ly/orcamentoscafeli" target="_blank">
              <i class="fab fa-whatsapp"></i> Solicite uma proposta 📲
            </a>
          </li>

          <li>
            <a href="https://www.behance.net/scafeli" target="_blank">
              <i class="fas fa-mask"></i> Últimos trabalhos 🔥
            </a>
          </li>

          <li>
            <Link href="/">
              <a>
                <i class="fab fa-spotify"></i> Nosso site 💻
              </a>
            </Link>
          </li>

          <li>
            <a
              target="_blank"
              href="https://open.spotify.com/playlist/1pAw0anb2Ntp0cR5DJFpWf?si=6f0e4777ab8d464c"
            >
              <i class="fab fa-spotify"></i> Estamos no Spotify 🎵
            </a>
          </li>

          <li>
            <a target="_blank" href="https://unsplash.com/@scafeli">
              <i class="fab fa-spotify"></i> Material gratuito no Unsplash 📸
            </a>
          </li>
        </ul>

        <div className="footer-links">
          <img className="logo-footer" src="scafeli-dark.svg" />
        </div>

        <div className="text-center copy-footer">
          <p className="text-bio">
            <small>
              Fácil de entender, impossível de ignorar. <br /> © Scafeli 2022.
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
