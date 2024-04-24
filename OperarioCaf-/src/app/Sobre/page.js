import Image from "next/image";

export default function SobreNos() {
    return (
        <div className="ContainerSobre" id="ContainerSobre">
            <div className="TitleSobre">
                <Image
                    src="/logoSobre.png"
                    width={1000}
                    height={1000}
                    className="LogoSobre"
                    alt="Picture of the author"
                />
                <h1 className="TextTitle">Sobre:</h1>
            </div>
            <div className="barra"></div>
            <div className="Conteudo">
                <div className="Coluna1">
                    <div className="Text">
                        <h1 className="TitleSobre">Quem somos?</h1>
                        <p className="TextSobre">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    </div>
                    <div className="Text">
                        <h1 className="TitleSobre">O que fazemos?</h1>
                        <p className="TextSobre">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    </div>
                </div>
                <div className="Coluna2">
                    <div className="Text">
                        <h1 className="TitleSobre">Com quem trabalhamos?</h1>
                        <p className="TextSobre">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    </div>
                    <div className="Text">
                        <h1 className="TitleSobre">Como trabalhamos?
                        </h1>
                        <p className="TextSobre">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    </div>
                </div>
            </div>
            <div className="barra" style={{ marginTop: '20vh' }}></div>

        </div>

    );
}