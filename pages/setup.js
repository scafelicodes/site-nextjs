import Header from "./../components/header";
import Footer from "./../components/footer";

export default function Setup() {
  return (
    <>
      <Header />
      <div className="setup">
        <h1>Setup</h1>
        <p>
          This is the setup page. This page is only accessible to the admin.
        </p>
      </div>
      <Footer />
    </>
  );
}
