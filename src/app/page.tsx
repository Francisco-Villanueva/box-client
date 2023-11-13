import { Button } from "commons/Button";

export default function Home() {
  return (
    <main>
      <div className="m-10 flex flex-col gap-4 bg- p-4">
        <Button>CREAR</Button>

        <Button variant="secondary">INICIAR SESION</Button>
      </div>
    </main>
  );
}
