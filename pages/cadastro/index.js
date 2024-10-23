import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/button";
import InputPublico from "@/components/inputPublico";
import UploadImagem from "@/components/uploadImagem";

import imagemLogo from "../../public/imagens/logo.svg";
import imagemUsuarioAtivo from "../../public/imagens/usuarioAtivo.svg";
import imagemEnvelope from "../../public/imagens/envelope.svg";
import imagemChave from "../../public/imagens/chave.svg";
import imagemAvatar from "../../public/imagens/avatar.svg";

export default function Cadastro() {
    const [imagem, setImagem] = useState(null);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("");

    return (
        <section className={`paginaCadastro paginaPublica`}>
            <div className="logoContainer desktop">
                <Image
                    src={imagemLogo}
                    alt="logotipo"
                    layout="fill"
                    className="logo"
                />
            </div>
            <div className="conteudoPaginaPublica">
                <form>

                    <UploadImagem
                        imagemPreviewClassName="avatar avatarPreview"
                        imagemPreview={imagem?.preview || imagemAvatar.src}
                        setImagem={setImagem}
                    />

                    <InputPublico
                        imagem={imagemUsuarioAtivo}
                        texto="nome completo"
                        tipo="text"
                        aoAlterarValor={(event) => setNome(event.target.value)}
                        valor={nome}
                    />

                    <InputPublico
                        imagem={imagemEnvelope}
                        texto="Email"
                        tipo="email"
                        aoAlterarValor={(event) => setNome(event.target.value)}
                        valor={email}
                    />


                    <InputPublico
                        imagem={imagemChave}
                        texto="Senha"
                        tipo="password"
                        aoAlterarValor={(event) => setSenha(event.target.value)}
                        valor={senha}
                    />

                    <InputPublico
                        imagem={imagemChave}
                        texto="Confirmar senha"
                        tipo="password"
                        aoAlterarValor={(event) => setConfirmacaoSenha(event.target.value)}
                        valor={senha}
                    />

                    <Button
                        texto="Cadastrar"
                        tipo="submit"
                        disable={false}
                    />
                </form>

                <div className="rodapePaginaPublica">
                    <p>Já possui uma conta?</p>
                    <Link href="/">Faça seu login agora!</Link>
                </div>
            </div>
        </section>
    )
}