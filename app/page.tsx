import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <section className="h-full max-h-screen w-full max-w-screen md:px-48 md:py-24 px-5">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}
