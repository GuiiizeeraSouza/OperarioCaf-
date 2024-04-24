import Image from "next/image";

export default function Curiosidades() {
    return (
        <div className="ContainerCuriosidades" id="ContainerCuriosidades">
            <div className="TextCuriosidadesLeft">
                <p className="Curiosidade1">Variedade de Aromas: O Brasil oferece uma ampla gama de aromas e sabores nos cafés especiais, desde notas frutadas até aromas de chocolate e caramelo.</p>
                <p className="Curiosidade2">Inovação nos Processos: Produtores brasileiros de café especial estão constantemente inovando em métodos de colheita seletiva, fermentação e secagem, elevando a qualidade do produto.</p>
                <p className="Curiosidade3">Sustentabilidade: Muitos produtores adotam práticas agrícolas sustentáveis, como cultivo orgânico e gestão da água, visando proteger o meio ambiente.</p>
            </div>
            <div className="FlechasCuriosidadesLeft">
                <section className="Flecha1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="177" height="31" viewBox="0 0 177 31" fill="none">
                        <path d="M0.391054 6.20678C-0.0470289 6.54309 -0.129535 7.17085 0.206771 7.60894L5.6872 14.7479C6.0235 15.186 6.65127 15.2685 7.08935 14.9322C7.52743 14.5959 7.60994 13.9681 7.27363 13.53L2.40215 7.18428L8.7479 2.31279C9.18598 1.97649 9.26849 1.34872 8.93218 0.910639C8.59588 0.472556 7.96811 0.390049 7.53003 0.726355L0.391054 6.20678ZM176.13 29.0085L1.1303 6.00853L0.869682 7.99147L175.87 30.9915L176.13 29.0085Z" fill="black" />
                    </svg>
                </section>
                <section className="Flecha2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="50" viewBox="0 0 200 50" fill="none">
                        <path d="M0.158931 43.4591C-0.139819 43.9236 -0.00544566 44.5423 0.459062 44.8411L8.02865 49.7095C8.49315 50.0082 9.1119 49.8738 9.41065 49.4093C9.7094 48.9448 9.57502 48.3261 9.11052 48.0273L2.38199 43.6999L6.70947 36.9713C7.00822 36.5068 6.87384 35.8881 6.40934 35.5893C5.94483 35.2906 5.32609 35.425 5.02734 35.8895L0.158931 43.4591ZM198.788 0.0227791L0.787771 43.0228L1.21222 44.9772L199.212 1.97722L198.788 0.0227791Z" fill="black" />
                    </svg>
                </section>
                <section className="Flecha3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="156" height="64" viewBox="0 0 156 64" fill="none">
                        <path d="M0.0890555 58.5875C-0.138766 59.0906 0.084396 59.6831 0.587502 59.911L8.78609 63.6235C9.2892 63.8513 9.88173 63.6282 10.1096 63.1251C10.3374 62.622 10.1142 62.0294 9.6111 61.8016L2.32347 58.5016L5.62353 51.2139C5.85135 50.7108 5.62819 50.1183 5.12509 49.8905C4.62198 49.6626 4.02944 49.8858 3.80162 50.3889L0.0890555 58.5875ZM154.648 0.0641713L0.647555 58.0642L1.35246 59.9358L155.352 1.93583L154.648 0.0641713Z" fill="black" />
                    </svg>
                </section>
            </div>
            <div className="ImagemCopoOperario">
                <Image
                    src="/copOperario.png"
                    width={1000}
                    height={1000}
                    className="CopoOperiario"
                    alt="Picture of the author"
                />
            </div>
            <div className="FlechasCuriosidadesRigth">
                <section className="Flecha4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="154" height="41" viewBox="0 0 154 41" fill="none">
                        <path d="M153.844 6.5357C154.14 6.06934 154.002 5.45145 153.536 5.15559L145.936 0.334291C145.47 0.0384321 144.852 0.176646 144.556 0.642999C144.26 1.10935 144.398 1.72725 144.865 2.02311L151.62 6.30871L147.334 13.064C147.038 13.5303 147.177 14.1482 147.643 14.4441C148.109 14.7399 148.727 14.6017 149.023 14.1354L153.844 6.5357ZM1.21829 40.9759L153.218 6.97588L152.782 5.02411L0.78171 39.0241L1.21829 40.9759Z" fill="black" />
                    </svg>
                </section>
                <section className="Flecha5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="171" height="32" viewBox="0 0 171 32" fill="none">
                        <path d="M170.601 25.7995C171.042 25.4678 171.131 24.8409 170.8 24.3993L165.394 17.2038C165.062 16.7623 164.435 16.6732 163.993 17.005C163.552 17.3367 163.463 17.9636 163.795 18.4051L168.6 24.8012L162.204 29.6065C161.762 29.9382 161.673 30.5651 162.005 31.0066C162.337 31.4482 162.964 31.5372 163.405 31.2055L170.601 25.7995ZM0.859399 1.99007L169.859 25.9901L170.141 24.0099L1.1406 0.00993365L0.859399 1.99007Z" fill="black" />
                    </svg>
                </section>
                <section className="Flecha6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="179" height="69" viewBox="0 0 179 69" fill="none">
                        <path d="M178.429 64.9033C178.928 64.6663 179.14 64.0698 178.903 63.5709L175.042 55.4414C174.805 54.9426 174.208 54.7303 173.709 54.9672C173.211 55.2042 172.998 55.8007 173.235 56.2996L176.668 63.5258L169.441 66.9582C168.943 67.1952 168.73 67.7917 168.967 68.2906C169.204 68.7894 169.801 69.0018 170.3 68.7648L178.429 64.9033ZM0.664675 1.9421L177.665 64.9421L178.335 63.0579L1.33532 0.0578974L0.664675 1.9421Z" fill="black" />
                    </svg>
                </section>
            </div>
            <div className="TextCuriosidadesRigth">
                <p className="Curiosidade4">Variedade de Aromas: O Brasil oferece uma ampla gama de aromas e sabores nos cafés especiais, desde notas frutadas até aromas de chocolate e caramelo.</p>
                <p className="Curiosidade5">Inovação nos Processos: Produtores brasileiros de café especial estão constantemente inovando em métodos de colheita seletiva, fermentação e secagem, elevando a qualidade do produto.</p>
                <p className="Curiosidade6">Sustentabilidade: Muitos produtores adotam práticas agrícolas sustentáveis, como cultivo orgânico e gestão da água, visando proteger o meio ambiente.</p>
            </div>
        </div>
    );
}