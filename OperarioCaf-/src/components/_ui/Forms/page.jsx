"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailJS from '@emailjs/browser';

export default function Forms() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault();

        if(name === '' || email === '' || fone === ''){
            alert("Preencha os campos obrigatórios!");
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
            fone: fone
        }

        emailJS.send("service_ftwofji", "template_bbjijn4", templateParams, "up9PEfj6Zg3158gea")
        .then((response) =>{
            console.log("email enviado")
            setEmail('')
            setFone('')
            setMessage('')
            setName('') 
        }, (err) => {
            console.log("ERRO ", err)
        } )


    }

    return (
        <motion.div className="Forms"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, top: -100 }}
            transition={{ duration: 0.5 }}>

            <form className="Formulario" onSubmit={sendEmail}>
                <h1 className="Title">Contato</h1>

                <input className="InputNome" placeholder="  Nome completo." type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                ></input>

                <input className="InputEmail" placeholder="  Seu melhor email." type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                ></input>

                <input className="InputEmail" placeholder="     (xx) xxxxxxx"
                    onChange={(e) => setFone(e.target.value)}
                    value={fone}
                ></input>

                <textarea className="Textarea" placeholder=" Mande sua pergunta, pedido, elogio, etc..." type="text"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                ></textarea>
                <button className="buttonInput" type="submit" value = "Enviar">Enviar</button>
            </form>
        </motion.div>
    );
}