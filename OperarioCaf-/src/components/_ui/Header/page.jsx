import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="Header">
            <div className="Links1">
                <Link id="Inicio" href="#ContainerCuriosidades">Curiosidades</Link>
                <Link id="SobreNos" href="#ContainerSobre">Sobre nós</Link>
            </div>
            <Image
                src="/logoPrincipal.png"
                width={700}
                height={500}
                className="LogoPage"
                alt="Picture of the author"
            />
            <div className="Links">

                <Link id="CoffeMenu" href="">Cafés</Link>
                <Link id="Contatos" href="#ContainerForms">Contatos</Link>
            </div>
        </div>
    );
}