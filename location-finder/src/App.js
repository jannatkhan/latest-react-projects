import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import Fly from "./Components/Fly";
import { ImLocation } from "react-icons/im";
import "./App.css";

function App() {
  // Setting up the state for the latitude
  // and longitude
  const [lat, setLat] = useState(22.5726);
  const [lon, setLon] = useState(88.3639);

  // Setting up the state for the map
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lon,
    zoom: 12,
    bearing: 0,
    pitch: 0,
    width: "100%",
    height: "100vh",
  });

  // Map viewport updates whenever the
  // latitude and longitude changes
  useEffect(() => {
    setViewport({
      latitude: lat,
      longitude: lon,
      zoom: 12,
      //transitionInterpolator: new FlyToInterpolator({ speed: 1.0 }),
      //transitionDuration: "auto",
      width: "100%",
      height: "100vh",
    });
  }, [lat, lon]);

  return (
    <ReactMapGL
      mapboxApiAccessToken={
        "pk.eyJ1IjoiamFubmF0dWwtZmFyZG91c2UiLCJhIjoiY2x4bGpieHlxMDB3ajJsczJ6a3F6ajc2ZiJ9.eYQxHDTx2t7rNuzaobpNvg"
      }
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Marker latitude={lat} longitude={lon}>
        <ImLocation size="30px" />
      </Marker>
      <Fly setLat={setLat} setLon={setLon} />
    </ReactMapGL>
  );
}

export default App;
