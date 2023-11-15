import BoxLayout from "commons/BoxLayout";
import { ShipmentCard } from "components/ShipmentCard";

export default function Home() {
  return (
    <main>
      <div className="m-10">
        <ShipmentCard
          pack={{
            _id: "#6c2614",
            address: "9 de Julio 3100,",
            clientName: "Miguel Rodr\u00edguez",
            weight: 118.47,
            deliverDate: "2023-21-11",
            status: "EN CURSO",
          }}
        ></ShipmentCard>
      </div>
    </main>
  );
}
