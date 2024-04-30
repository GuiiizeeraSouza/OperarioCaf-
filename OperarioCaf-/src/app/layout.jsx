import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../app/principalPage/PagePrincipal.css";
import "../app/Sobre/Sobre.css";
import "../app/Curiosidades/Curiosidades.css";
import "../app/Produtos/Produtos.css";
import "../app/Footer/Footer.css";
import "../app/PageForms/PageForms.css";
import "../components/_ui/Header/Header.css";
import "../components/_ui/Forms/Forms.css"
import "../components/_ui/Button/Catalago/Catalago.css";
import "../components/_ui/Button/Instagram/Instagram.css";
import "../components/_ui/Button//Whatsapp/Whatsapp.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Operário Café",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
