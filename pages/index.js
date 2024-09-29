import Button from "@/components/button";

export default function Home() {
  return (
    <>
      <Button texto={"login"} cor={"outline"} onclick={() => console.log("Botão CLicado")}/>
    </>
  );
}
