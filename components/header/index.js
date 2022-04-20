import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          {/* <Link href="/">
            <a className="logo-header">
              <img src="/logo-white.svg" alt="Logo" />
            </a>
          </Link> */}

          <nav class="navbar navbar-expand-lg navbar-dark">
            <Link href="/">
              <a class="navbar-brand">
                <img src="/logo-white.svg" alt="Logo" />
              </a>
            </Link>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <Link href="/">
                    <a class="nav-link">Home</a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link href="/sobre">
                    <a class="nav-link">Sobre</a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link href="/trabalhos">
                    <a class="nav-link">Trabalhos</a>
                  </Link>
                </li>
                {/* <li class="nav-item">
                  <Link href="/blog">
                    <a class="nav-link">Blog</a>
                  </Link>
                </li> */}
                {/* <li class="nav-item">
                  <Link href="/academy">
                    <a class="nav-link">Academy</a>
                  </Link>
                </li> */}

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Fale conosco
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link href="/contato">
                      <a class="dropdown-item">Solicite um orçamento</a>
                    </Link>
                    <Link href="/contato">
                      <a class="dropdown-item">Envie uma mensagem</a>
                    </Link>

                    {/* <Link href="/contato">
                      <a class="dropdown-item">Nosso WhatsApp</a>
                    </Link> */}
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
