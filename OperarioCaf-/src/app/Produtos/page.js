import Image from "next/image";

export default function Produtos() {
    return (
        <div className="PageProdutos">

            <Image
                src="/cafeOperario.png"
                width={700}
                height={700}
                className="cafe1"
                alt="Picture of the author"
            />
            <Image
                src="/Cafe1.png"
                width={700}
                height={700}
                className="v60"
                alt="Picture of the author"
            />

            <Image
                src="/bourbon-vermelho.png"
                width={700}
                height={700}
                className="Cafe2"
                alt="Picture of the author"
            />
            <Image
                src="/Cafe2.png"
                width={700}
                height={700}
                className="Bule"
                alt="Picture of the author"
            />
            <Image
                src="/Cafe3.png"
                width={700}
                height={700}
                className="Cafe3"
                alt="Picture of the author"
            />

        </div>
    );
}