import React from "react";

interface GoogleMapProps {
  origin: string;
  destination: string;
}

export const GoogleMap = ({ origin, destination }: GoogleMapProps) => {
  const mapSrc = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyDHpvaGqc_rZRtn4gmFBBnRqr3D4vumqE0&origin=${encodeURIComponent(
    origin
  )}&destination=${encodeURIComponent(destination)}&mode=driving`;

  return (
    <iframe
      title="Google Maps Directions"
      id="gmap_canvas"
      src={mapSrc}
      className="h-full w-full"
    ></iframe>
  );
};

// Ejemplo de uso:
{
  /* <GoogleMap
        origin={"Av Santa Fe 2545, CABA"}
        destination={"Av Libertador 6954, CABA"}
      ></GoogleMap> */
}

//Falta Configurar la API Key como una variable de entorno e incorporarla en los requierments del README
