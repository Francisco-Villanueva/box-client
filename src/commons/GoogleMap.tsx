import React, { FC } from "react";

interface GoogleMapProps {
  origin: string;
  destination: string;
}

const GoogleMap: FC<GoogleMapProps> = ({ origin, destination }) => {
  const mapSrc = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyDHpvaGqc_rZRtn4gmFBBnRqr3D4vumqE0&origin=${encodeURIComponent(
    origin
  )}&destination=${encodeURIComponent(destination)}&mode=driving`;

  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title="Google Maps Directions"
          width="100%"
          height="396"
          id="gmap_canvas"
          src={mapSrc}
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;

// Ejemplo de uso:
{
  /* <GoogleMap
        origin={"Av Santa Fe 2545, CABA"}
        destination={"Av Libertador 6954, CABA"}
      ></GoogleMap> */
}

//Falta Configurar la API Key como una variable de entorno e incorporarla en los requierments del README
