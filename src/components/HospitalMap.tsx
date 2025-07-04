'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const hospitalCoords: [number, number] = [22.4922, 88.4081];

export default function HospitalMap() {
  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
      <MapContainer
        center={hospitalCoords}
        zoom={16}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={hospitalCoords} icon={customIcon}>
          <Popup>
            Veterinary Hospital <br /> 22°29&apos;31.9&quot;N, 88°24&apos;29.0&quot;E
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
