import { Icon, divIcon, point } from "leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import getPlaces from "./places";

const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: "/placeholder.png",
  iconSize: [38, 38], // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

const markers = [
  {
    geocode: [28.26689, 83.96851],
    popUp: "Hello, I am pop up 1",
  },
  {
    geocode: [48.85, 2.3522],
    popUp: "Hello, I am pop up 2",
  },
  {
    geocode: [48.855, 2.34],
    popUp: "Hello, I am pop up 3",
  },
];

const Map = ({ geoCode, popup }) => {
  return (
    <MapContainer center={geoCode} zoom={13}>
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        <Marker position={geoCode} icon={customIcon}>
          <Popup>{popup}</Popup>
        </Marker>
        {/* Mapping through the markers */}
        {/* {markers.map((marker) => (
          <Marker position={geoCode} icon={customIcon}>
            <Popup>{popup}</Popup>
          </Marker>
        ))} */}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export const Maps = ({ center, geoCodes }) => {

  const geoCode= [center[0].lat, center[0].lon]

  console.log(geoCode)
  return (
    <MapContainer center={geoCode} zoom={3}>
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >

        {/* Mapping through the markers */}
        {geoCodes.map((each) => (
          <Marker position={[each.lat, each.lon]} icon={customIcon}>
            <Popup>{each.location_display_name}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
