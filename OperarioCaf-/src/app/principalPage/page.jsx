"use client";

import Catalago from "@/components/_ui/Button/Catalago/page";
import Header from "@/components/_ui/Header/page";
import Image from "next/image";
import { motion } from "framer-motion"

export default function PagePrincipal() {
    return (
        <div className="PagePrincipal">
            <Header />
            <div className="Barra"></div>
            <div className="ContainerInicial">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.9}}
                >
                    <h1 className="TitleInitial">O melhor café é do seu jeito!</h1>
                </motion.div>
                <motion.div
                    className="ladoB"
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1, x: 20 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1.0}}
                >

                    <Image
                        src="/Imagens inicio.png"
                        width={1200}
                        height={1200}
                        className="Maquina"
                        alt="Picture of the author"
                    />
                    <Catalago />
                </motion.div>
            </div>

        </div>
    );
}


