import React from "react";
import GoogleMaps from "simple-react-google-maps";

export default function Map() {
  return (
    <div style={{height: "100%"}}>
      <GoogleMaps
        apiKey={process.env.REACT_APP_MAP}
        style={{ height: "100%", width: "100%" }}
        zoom={17}
        center={{ lat: 25.768628864891127, lng: -80.19088143007453 }}
        markers={{ lat: 25.768628864891127, lng: -80.19088143007453 }} //optional
      />
    </div>
  );
}
