import Forms from "@/components/_ui/Forms/page";
import Image from "next/image";

export default function PageForms() {
    return (
        <div className="ContainerForms" id="ContainerForms">
            <Image
                src="/coffee.png"
                width={1000}
                height={1000}
                className="cafeFundo"
                alt="Picture of the author"
            />
            <Forms />
            <Image
                src="/coffee1.png"
                width={1000}
                height={1000}
                className="cafeFundo1"
                alt="Picture of the author"
            />
        </div>
    );
}