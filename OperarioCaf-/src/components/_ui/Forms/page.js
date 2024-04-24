import Image from "next/image";
import Link from "next/link";

export default function Forms() {
    return (
        <div className="Forms">

            <div className="Formulario">
                <h1 className="Title">Contato</h1>
                <input className="InputNome" placeholder="  Nome completo."></input>
                <input className="InputEmail" placeholder="  Seu melhor email."></input>
                <input className="InputEmail" placeholder="     (xx) xxxxxxx"></input>
                <textarea className="Textarea" placeholder=" Mande sua pergunta, pedido, elogio, etc..."></textarea>
                <button className="buttonInput">Enviar</button>
            </div>
        </div>
    );
}