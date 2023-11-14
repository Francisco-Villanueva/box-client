import CarrierCard from "components/CarrierCard";
import { user } from "../mocks/users.json";
export default function Home() {
  return (
    <main>
      <div className="flex flex-col ">
        {user.slice(1).map((carrier) => (
          <CarrierCard carrier={carrier} />
        ))}
      </div>
    </main>
  );
}
