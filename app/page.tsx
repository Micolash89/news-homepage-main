import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <section className="h-full max-h-screen w-full max-w-screen sm:p-48">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}
