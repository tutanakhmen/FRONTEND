import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Hero from "../components/Hero/Hero";
import Indonesia from "../components/Indonesia/Indonesia";
import Navbar from "../components/Navbar/Navbar";
import Provinsi from "../components/Provinsi/provinsi";

function Main() {
  return (
    <main>
      <Hero />
      <Indonesia />
      <Provinsi />
      <Form />
    </main>
  )
}

function Home() {
  return (
    <div>
     <Navbar />
     <Main />
     <Footer />
     
    </div>
  );
}

export default Home;
