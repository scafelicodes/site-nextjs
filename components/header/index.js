import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img className="logo-header" src="logo-scafeli-white.svg" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <NavDropdown title="O que fazemos" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Social Media
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Produção de Vídeos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Fotografia Comercial
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Landing Pages
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Social" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Instagram
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Behance
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Unsplash
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    LinkedIn
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="/trabalhos">Projetos</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>

                <Nav.Link eventKey={2} href="/orcamento">
                  Contato
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
