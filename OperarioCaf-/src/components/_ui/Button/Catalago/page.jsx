"use client";


import Image from "next/image";
import { motion } from "framer-motion"

export default function Catalago() {
    return (
        <div className="Catalago">
            <motion.a className="TextButton" href=""
            >Catálogo</motion.a>
            <Image
                src="/Catalago.png"
                width={500}
                height={500}
                className="LogoCatalago"
                alt="Picture of the author"
            />
        </div>
    );
}