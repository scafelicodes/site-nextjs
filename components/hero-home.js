export default function HeroHome() {
  return (
    <section className="hero-home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <span className="pre-title">Bem-vindo à Scafeli 🤘</span>

            <h1>Maker. Gamer. Developer. Noob.</h1>

            <p>
              Desenvolvimento front-end está muito além do HTML e CSS. Eu posso
              ajudar o seu projeto com performance!
            </p>
          </div>
          <div className="col-md-5">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Seu nome"
                />

                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Seu WhatsApp"
                />
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Digite o seu melhor e-mail"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Preciso de um orçamento
              </button>

              <div className="info-form">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    opacity="0.3"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.3335 3.33326L9.63158 2.15237C9.87518 2.10669 10.1251 2.10669 10.3687 2.15237L16.6668 3.33326V8.9032C16.6668 12.6959 14.713 16.2211 11.4968 18.2312L10.5302 18.8353C10.2059 19.038 9.79443 19.038 9.47016 18.8353L8.50351 18.2312C5.28731 16.2211 3.3335 12.6959 3.3335 8.9032L3.3335 3.33326Z"
                    fill="#44D52C"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.31234 12.2917C9.11268 12.2917 8.91303 12.2118 8.75331 12.0521L7.15609 10.4549C6.83664 10.1354 6.83664 9.65625 7.15609 9.33681C7.47553 9.01736 7.99463 9.01736 8.27414 9.33681L9.31234 10.375L11.9478 7.73958C12.2672 7.42014 12.7464 7.42014 13.0658 7.73958C13.3853 8.05903 13.3853 8.53819 13.0658 8.85764L9.87136 12.0521C9.71164 12.2118 9.51199 12.2917 9.31234 12.2917Z"
                    fill="#44D52C"
                  ></path>
                </svg>{" "}
                Não compartilhamos os seus dados
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
