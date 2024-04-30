import Image from "next/image";

export default function Instagram() {
    return (
        <div className="Instagram">
            <a className="TextButtonInsta" href=""> INSTAGRAM</a>
            <Image
                src="/instagram (3).png"
                width={500}
                height={500}
                className="LogoInstagram"
                alt="Picture of the author"
            />
        </div>
    );
}