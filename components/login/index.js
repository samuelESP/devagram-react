import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import InputPublico from "../inputPublico";

import imagemEnvelope from "@/public/imagens/envelope.svg";
import imagemChave from "@/public/imagens/chave.svg";
import imagemLogo from "@/public/imagens/logo.svg";
import Button from "../button";


export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <section className={`paginaLogin paginaPublica`}>

            <div className="logoContainer">
                {<Image
                    src={imagemLogo}
                    alt="LogoTipo"
                    layout="fill"
                    className="logo"
                />}
            </div>


            <div className="conteudoPaginaPublica">
                <form>
                    <InputPublico
                        imagem={imagemEnvelope}
                        texto="E-mail"
                        tipo="email"
                        aoAlterarValor={(e) => setEmail(e.target.value)}
                        mensagemValidacao="O endereço informado é inválido"
                        valor={email}
                    />

                    <InputPublico
                        imagem={imagemChave}
                        texto="Senha"
                        tipo="password"
                        valor={senha}
                        aoAlterarValor={(e) => setSenha(e.target.value)}
                        mensagemValidacao="Necessario ter mais de 3 caracteres"

                    />

                    <Button
                        tipo="submit"
                        texto="Login"
                        disable={false}
                    />
                </form>

                <div className="rodapePaginaPublica">
                    <p>Não possui uma conta?</p>
                    <Link href="/cadastro">Faça seu cadastro agora!</Link>
                </div>
            </div>
        </section>
    )
}