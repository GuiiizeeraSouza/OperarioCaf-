import Image from "next/image";

export default function Whatsapp() {
    return (
        <div className="Whatsapp">
            <a className="TextButtonWpp" href=""> WHATSAPP</a>
            <Image
                src="/whatsapp 1 (1).png"
                width={500}
                height={500}
                className="LogoWpp"
                alt="Picture of the author"
            />
        </div>
    );
}