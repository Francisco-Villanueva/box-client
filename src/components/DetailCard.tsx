import { Button, Graph, UserImg, Title } from "commons";
import { type } from "os";

interface DetailCardProps {
  type: "carrier" | "package";
  data: User[] | Pack[];
}

interface User {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  image: string;
  role: string;
  status: string;
  packages: Pack[];
}
interface Pack {
  _id: string;
  address: string;
  clientName: string;
  weight: number;
  deliverDate: string;
  status: string;
}

export function DetailCard({ type, data }: DetailCardProps) {
  //TODO Mover todo esto a los estados de mobx.
  const title = type === "carrier" ? "Repartidores" : "Paquetes";
  const FILTER = type === "carrier" ? "HABILITADO" : "ENTREGADO";
  const msg = type === "carrier" ? "Habilitados" : "Entregados";

  const filteredData = data.filter((element) => element.status === FILTER);
  const percentage = Math.floor((filteredData.length / data.length) * 100);

  return (
    <div className="flex justify-between items-center text-darkGreen ">
      <div className="flex items-center gap-4">
        <Graph value={percentage} size="lg" />
        <div className="flex flex-col">
          <Title>{title}</Title>
          <div>
            {filteredData.length}/{data.length} {msg}
          </div>
          {type === "carrier" && (
            // TODO fixear esto y hacerlo con imagenes reales
            <div className="flex ml-[1rem]">
              {filteredData.map((element) => (
                <div className="ml-[-1rem] border rounded-full bg-green-700  w-[2rem] h-[2rem]"></div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Button>VER</Button>
    </div>
  );
}
