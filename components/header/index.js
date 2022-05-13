import _map from "lodash/map";
import Link from "next/link";

export default function Header() {
  const mainmenu = [
    {
      title: "Início",
      href: "/",
    },
    {
      title: "Sobre",
      href: "/sobre",
    },
    {
      title: "Trabalhos",
      href: "https://www.behance.net/scafeli",
      target: "_blank",
    },
    {
      title: "Serviços",
      href: "/servicos",
    },
    // {
    //   title: "Casting",
    //   href: "/casting",
    // },

    {
      title: "Orçamento",
      href: "https://bit.ly/orcamentoscafeli",
      target: "_blank",
    },
  ];

  return (
    <>
      <div className="header">
        <div className="container">
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
                {_map(mainmenu, (item) => (
                  <li class="nav-item">
                    <Link href={item.href}>
                      <a target={item?.target} class="nav-link">
                        {item.title}
                      </a>
                    </Link>
                  </li>
                ))}

                {/* <li class="nav-item dropdown">
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

                  </div>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
