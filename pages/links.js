import Link from "next/link";

export default function Links() {
  return (
    <div className="bio-page-scafeli">
      <div className="container bio">
        <div className="text-center">
          <img className="logo-header" src="logo-scafeli-white.svg" />
          <p className="text-bio">
            Fácil de entender, impossível de ignorar ⚡
          </p>
        </div>

        <ul>
          <li>
            <Link href="/contato">
              <a>
                <i class="fab fa-whatsapp"></i> Solicite uma proposta
              </a>
            </Link>
          </li>

          <li>
            <Link href="/trabalhos">
              <a>
                <i class="fas fa-mask"></i> Últimos trabalhos
              </a>
            </Link>
          </li>

          <li>
            <a
              target="_blank"
              href="https://open.spotify.com/playlist/1pAw0anb2Ntp0cR5DJFpWf?si=6f0e4777ab8d464c"
            >
              <i class="fab fa-spotify"></i> Nossa playlist no Spotify
            </a>
          </li>
        </ul>

        <div className="footer-links">
          <Link href="/">
            <a>
              <i className="gg-arrow-left"></i> Visite o nosso site
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
