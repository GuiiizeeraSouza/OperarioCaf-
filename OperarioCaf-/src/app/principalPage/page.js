import { motion } from "framer-motion";
import Catalago from "@/components/_ui/Button/Catalago/page";
import Header from "@/components/_ui/Header/page";
import Image from "next/image";


export default function PagePrincipal() {
    return (
        <div className="PagePrincipal">
            <Header />
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            />
            <div className="Barra"></div>
            <div className="ContainerInicial">
                <h1 className="TitleInitial">O melhor café é do seu jeito!</h1>
                <div className="ladoB">

                    <Image
                        src="/Imagens inicio.png"
                        width={1200}
                        height={1200}
                        className="Maquina"
                        alt="Picture of the author"
                    />
                    <Catalago />
                </div>
            </div>

        </div>
    );
}


