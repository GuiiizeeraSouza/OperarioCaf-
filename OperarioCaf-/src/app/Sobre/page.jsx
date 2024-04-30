"use client";

import Image from "next/image";
import { motion } from "framer-motion"

export default function SobreNos() {
    return (
        <div className="ContainerSobre" id="ContainerSobre">
            <motion.div className="TitleSobre"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, top: -100 }}
                transition={{ duration: 0.5 }}
            >
                <Image
                    src="/logoSobre.png"
                    width={1000}
                    height={1000}
                    className="LogoSobre"
                    alt="Picture of the author"
                />
                <h1 className="TextTitle">Sobre:</h1>
            </motion.div>
            <motion.div
                className="barra"
            ></motion.div>
            <div className="Conteudo">
                <div className="Coluna1">
                    <motion.div className="Text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, top: -100 }}
                        transition={{ duration: 0.6 }}>
                        <h1 className="TitleSobre">Quem somos?</h1>
                        <p className="TextSobre">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    </motion.div>
                    <motion.div className="Text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, top: -100 }}
                        transition={{ duration: 0.5 }}>
                        <h1 className="TitleSobre">O que fazemos?</h1>
                        <p className="TextSobre">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    </motion.div>
                </div>
                <div className="Coluna2">
                    <motion.div className="Text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, top: -100 }}
                        transition={{ duration: 0.6 }}>
                        <h1 className="TitleSobre">Com quem trabalhamos?</h1>
                        <p className="TextSobre">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    </motion.div>
                    <motion.div className="Text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, top: -100 }}
                        transition={{ duration: 0.5 }}>
                        <h1 className="TitleSobre">Como trabalhamos?
                        </h1>
                        <p className="TextSobre">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    </motion.div>
                </div>
            </div>
            <div className="barra" style={{ marginTop: '20vh' }}></div>

        </div >

    );
}