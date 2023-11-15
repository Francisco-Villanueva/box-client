import { TitleBox, BoxLayout, ShortArrowIcon } from "commons";
import { ShipmentCard } from "components";
import { user } from "../mocks/users.json";

export function ShipmentView() {

  const activeUser = user[2];

  return (
    <BoxLayout className="mx-auto flex flex-col bg-white ">
      <TitleBox
        icon={<ShortArrowIcon className="rotate-90" />}
        variant="secondary"
        className="w-full mb-4 "
      >
        Repartos Pendientes
      </TitleBox>
      <div className="flex flex-col w-[90%] m-auto">
        {activeUser.packages.map((carrier, i) => (
          <>
          {i!==0 && i!==activeUser.packages.length && <hr/>}
            <ShipmentCard key={carrier._id} pack={carrier} />
          </>
        ))}
      </div>
    </BoxLayout>
  );
}
