import Image from "next/image";
import PagePrincipal from "./principalPage/page";
import SobreNos from "./Sobre/page";
import Curiosidades from "./Curiosidades/page";
import Produtos from "./Produtos/page";
import Footer from "./Footer/page";
import PageForms from "./PageForms/page";


export default function Home() {
  return (
      <div className="InitialPage">
        <PagePrincipal />
        <SobreNos />
        <Curiosidades />
        <Produtos />
        <PageForms />
        <Footer />
      </div>
  );
}
