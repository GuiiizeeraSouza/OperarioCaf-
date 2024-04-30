import Image from "next/image";

export default function Footer() {
    return (
        <div className="PageFooter" id="Footer">
            <div className="ContainerFooter">
                <a className="LinkFooter">Contato</a>
                <a className="LinkFooter">Sobre</a>
                <Image
                    src="/logoSobre.png"
                    width={1000}
                    height={1000}
                    className="LogoFooter"
                    alt="Picture of the author"
                />
                <a className="LinkFooter">Catalago</a>
                <a className="LinkFooter">Topo</a>
            </div>
            <div className="BarraFooter"></div>
            <div className="ContainerRedes">
                <Image
                    src="/gmail (2) 1 (1).png"
                    width={1000}
                    height={1000}
                    className="RedeSocial"
                    alt="Picture of the author"
                />
                <Image
                    src="/instagram (3) 1 (1).png"
                    width={1000}
                    height={1000}
                    className="RedeSocial"
                    alt="Picture of the author"
                />
                <Image
                    src="/facebook 1 (1).png"
                    width={1000}
                    height={1000}
                    className="RedeSocial"
                    alt="Picture of the author"
                />
                <Image
                    src="/whatsapp 1 (2).png"
                    width={1000}
                    height={1000}
                    className="RedeSocial"
                    alt="Picture of the author"
                />
            </div>
            <p className="paragrafo">© Photo, Inc. 2019. We love our users!</p>
        </div>

    );
}