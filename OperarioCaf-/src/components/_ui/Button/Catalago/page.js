import Image from "next/image";

export default function Catalago() {
    return (
        <div className="Catalago">
            <a className="TextButton" href="">CATALAGO</a>
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