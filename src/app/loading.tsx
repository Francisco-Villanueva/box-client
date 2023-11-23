"use client";

import { RotatingLines } from "react-loader-spinner";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
      }}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="1"
        width="64"
        visible={true}
      />
    </div>
  );
}
