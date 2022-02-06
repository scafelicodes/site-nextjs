import Header from "../components/header";
import Footer from "../components/footer";

export default function Obrigado() {
  return (
    <div className="contato">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <h1>Obrigado!</h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
