"use client";
import React from "react";
import GoogleMap from "commons/GoogleMap";
import { TitleBox } from "commons";
import { ArrowLeft } from "commons/Icons";

export function DeliveryInProgress() {
  return (
    <div
      style={{
        marginTop: "70px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TitleBox variant="primary" icon={<ArrowLeft />}>
        reparto en curso
      </TitleBox>
      <div style={{ marginTop: "10px" }}></div>
      <div
        className="w-80 rounded-xl"
        children={
          <GoogleMap
            origin="Av Santa Fe 2545, CABA"
            destination="Av Libertador 6954, CABA"
          ></GoogleMap>
        }
      ></div>
    </div>
  );
}
