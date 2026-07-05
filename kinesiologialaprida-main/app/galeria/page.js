import BotonFlotante from "@/components/home/BotonFlotante";
import Footer from "@/components/home/Footer";
import Galeria from "@/components/home/Galeria";
import Navbar from "@/components/home/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Galeria />
      <BotonFlotante />
      <Footer />
    </main>
  );
}
