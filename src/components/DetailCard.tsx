import { Button, Graph, UserImg, Title } from "commons";
import { observer } from "mobx-react-lite";
import { useStore } from "models/root.store";
import { type } from "os";


interface DetailCardProps {
  type: "carrier" | "package";
}
interface AuxProps {
  shortData: number;
  mainData: number;
  msg: string;
}

function Aux({ shortData, mainData, msg }: AuxProps) {
  return ` ${shortData}/${mainData} ${msg}`;
}

export const DetailCard = observer(function DetailCard({
  type,
}: DetailCardProps) {
  const {
    users: { users, avaliableCarriers, carriers },
    packages: { packages, deliveredPackages, packagesByDate },
    date: { date_YMD },
  } = useStore();

  const title = type === "carrier" ? "Repartidores" : "Paquetes";

  console.log(packagesByDate(deliveredPackages, date_YMD));

  const DELIVERD_PACKAGES = packagesByDate(deliveredPackages, date_YMD);
  const TOTAL_PACKAGES = packagesByDate(packages, date_YMD);
  const percentage =
    type === "carrier"
      ? Math.floor((avaliableCarriers.length / carriers.length) * 100)
      : Math.floor((DELIVERD_PACKAGES.length / TOTAL_PACKAGES.length) * 100);

  return (
    <div className="flex justify-between items-center text-darkGreen ">
      <div className="flex items-center gap-4">
        <Graph value={percentage} size="lg" />
        <div className="flex flex-col">
          <Title>{title}</Title>
          <div>
            {type === "carrier" ? (
              <>
                {avaliableCarriers.length}/{carriers.length} Habilitados
              </>
            ) : (
              <>
                {DELIVERD_PACKAGES.length}/{TOTAL_PACKAGES.length} Entregados
              </>
            )}
          </div>
          {type === "carrier" && (
            // TODO fixear esto y hacerlo con imagenes reales
            <div className="flex ml-[1rem]">
              {avaliableCarriers.map((element) => (
                <div className="ml-[-1rem] border rounded-full bg-green-700  w-[2rem] h-[2rem]"></div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Button>VER</Button>
    </div>
  );
});
