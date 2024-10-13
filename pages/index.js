import Avatar from "@/components/avatar";
import Button from "@/components/button";
import UploadImagem from "@/components/uploadImagem";
import { useState, useRef } from "react";

export default function Home() {

  const [imagem, setImagem] = useState(null)
  const referenciaInput = useRef(null)

  console.log(imagem)

  return (
    <>
      <Button texto={"login"} cor={"outline"} onclick={() => console.log("Botão CLicado")} />
      <Avatar/>
      <UploadImagem setImagem={setImagem} imagemPreview={imagem?.preview}
        aoSetarAReferencia={(ref) => referenciaInput.current = ref} />
    </>
  );
}
