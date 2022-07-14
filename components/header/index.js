import _map from "lodash/map";
import Link from "next/link";

export default function Header() {
  const mainmenu = [
    {
      title: "Empresa",
      href: "/empresa",
    },
    {
      title: "Serviços",
      href: "/servicos",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Trabalhos",
      href: "/trabalhos",
      // target: "_blank",
    },
  ];

  return (
    <>
      <div className="header">
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-dark">
            <Link href="/">
              <a class="navbar-brand">Scafeli</a>
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

                <li class="nav-item">
                  <Link href="/contato">
                    <a class="nav-link cta-link">Fale conosco</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
