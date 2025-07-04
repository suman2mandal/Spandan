'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = L.divIcon({
  className: '', // No default class to avoid Leaflet blue marker
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0f766e" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
    </svg>
  `,
  iconSize: [32, 32],
  iconAnchor: [16, 32], // bottom center
});

const shopLocations = [
  { lat: 22.365664, lng: 88.434097, name: 'Shop 1' },
  { lat: 22.502035, lng: 88.315439, name: 'Shop 2' },
  { lat: 22.513519, lng: 88.355896, name: 'Shop 3' },
  { lat: 22.520752, lng: 88.365326, name: 'Shop 4' },
  { lat: 22.492968, lng: 88.388535, name: 'Shop 5' },
];

export default function NearestShopsMap() {
  return (
    <MapContainer
      center={[22.49, 88.36]}
      zoom={11}
      scrollWheelZoom={false}
      className="w-full h-full rounded-xl"
    >
      <TileLayer
        
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {shopLocations.map((shop, index) => (
        <Marker key={index} position={[shop.lat, shop.lng]} icon={customIcon}>
          <Popup>{shop.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
