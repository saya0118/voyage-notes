import MapGL, { Marker } from "react-map-gl";
import "./Map.css";
import RoomIcon from "@mui/icons-material/Room";

function MapBox() {
  return (
    <div className="h-full">
      <MapGL
        initialViewState={{
          longitude: 0,
          latitude: 40.246292,
          zoom: 1,
        }}
        mapboxAccessToken={process.env.REACT_APP_MAP_ACCESS_TOKEN}
        style={{ width: 580, height: 450 }}
        mapStyle="mapbox://styles/sayaka0118/cl30zljwc005i15ld8h5f2d9k"
      >
        <Marker longitude={139.839478} latitude={35.652832} anchor="bottom">
          <RoomIcon
            style={{ color: "white" }}
          />
        </Marker>
      </MapGL>
    </div>
  );
}

export default MapBox;
