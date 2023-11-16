"use client";
import {
  ArrowLeft,
  BoxLayout,
  BoxTitle,
  ShortArrowIcon,
  Title,
  TitleBox,
} from "commons";
import { CarrierCard, DetailCard } from "components";
import React from "react";
import { user } from "../../../mocks/users.json";
import { observer } from "mobx-react-lite";
import { useStore } from "models/root.store";

export default observer(function page() {
  const {
    users: { carriers },
  } = useStore();

  return (
    <div>
      <div>
        <TitleBox
          variant="primary"
          icon={<ArrowLeft />}
          className="w-full my-2 pr-6"
        >
          repartidores
        </TitleBox>

        <BoxLayout className="h-[75vh] overflow-scroll">
          <BoxTitle>
            <Title>Enero</Title>
          </BoxTitle>

          {/* TODO ver el error de Type en PackageCheckboxCard */}
          <div className="flex flex-col m-auto ">
            {carriers.map((carrier) => (
              <>
                <CarrierCard carrier={carrier} />
              </>
            ))}
          </div>

          <BoxTitle variant="bottom">
            <ShortArrowIcon className="rotate-[270deg]" />
          </BoxTitle>
        </BoxLayout>
      </div>
    </div>
  );
})
