import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Sobre } from "./sobre/Sobre";
import { Features } from "./features/Features";
import { Infos } from "./infos/Infos";
import { Reviews } from "./reviews;/Reviews";

export function Home() {
  return (
    <div className="Home">
      <Header />
      <Sobre />
      <Features />
      <Infos />
      <Reviews />
      <Footer />
    </div>
  );
}
