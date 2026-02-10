import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <section className="h-full min-h-screen w-full min-w-screen p-48">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}
