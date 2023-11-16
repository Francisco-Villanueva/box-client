"use client";
import { ArrowLeft, BoxLayout, BoxTitle, Title, TitleBox } from "commons";
import { DetailCard } from "components";
import React from "react";
import { user } from "../../../mocks/users.json";

export default function page() {
  return (
    <div>
      <div>
        <TitleBox
          variant="primary"
          icon={<ArrowLeft />}
          className="w-full my-2 pr-6"
        >
          reparto en curso
        </TitleBox>
        <BoxLayout
          children={
            <div>
              <BoxTitle children="Enero"></BoxTitle>{" "}
              {user.map((carrier)=>(
                <DetailCard type="carrier" data={} />
              ))}
              
              <BoxTitle variant="bottom"></BoxTitle>
            </div>
          }
        ></BoxLayout>
      </div>
    </div>
  );
}
