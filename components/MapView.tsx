import React, { useEffect, useRef } from 'react';
import { Outlet } from '../types';

declare const L: any; // Declare Leaflet global object

interface MapViewProps {
  outlets: Outlet[];
}

const IMG_BASE_URL = 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/';

const MapView: React.FC<MapViewProps> = ({ outlets }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (typeof L === 'undefined' || !mapContainerRef.current || mapInstanceRef.current) return;

    // Initialize map centered on Malaysia
    const map = L.map(mapContainerRef.current).setView([4.2105, 101.9758], 7);
    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Custom Icon
    const customIcon = L.icon({
      iconUrl: `${IMG_BASE_URL}logo-yellow-bg.webp`,
      iconSize: [40, 40], // size of the icon
      iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
      popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
    });
    
    const markers = outlets
      .filter(outlet => outlet.lat && outlet.lng)
      .map(outlet => {
        const marker = L.marker([outlet.lat, outlet.lng], { icon: customIcon }).addTo(map);
        marker.bindPopup(`
          <div class="font-sans">
            <h3 class="font-bold text-base text-[var(--brand-red)]">${outlet.name}</h3>
            <p class="text-xs text-gray-600 my-1">${outlet.address}</p>
            <a href="${outlet.mapsUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline font-semibold text-sm inline-block">View Details</a>
          </div>
        `);
        return marker;
      });

    if (markers.length > 0) {
      const group = L.featureGroup(markers);
      map.fitBounds(group.getBounds().pad(0.5));
    }


    return () => {
      // Clean up map instance
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [outlets]);

  return <div ref={mapContainerRef} style={{ height: '70vh', borderRadius: '12px' }} className="shadow-lg bg-gray-200 dark:bg-gray-700" />;
};

export default MapView;
