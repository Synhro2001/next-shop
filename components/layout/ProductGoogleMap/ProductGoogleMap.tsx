"use client";

import { GoogleMapProduct } from "@/types/productGoogleMap/productGoogleMap.types";
import { importLibrary, setOptions } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export default function ProductGoogleMap({
    latitude,
    longitude,
}: GoogleMapProduct) {

    const mapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const initMap = async () => {
            if (!mapRef.current) return;

            setOptions({
                key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
            });

            const { Map } =
                await importLibrary("maps") as google.maps.MapsLibrary;

            const { AdvancedMarkerElement } =
                await importLibrary("marker") as google.maps.MarkerLibrary;

            const position = {
                lat: latitude,
                lng: longitude,
            };

            const map = new Map(mapRef.current, {
                center: position,
                zoom: 14,
                mapId: "DEMO_MAP_ID",

                disableDefaultUI: true,
                zoomControl: true,
            });

            new AdvancedMarkerElement({
                map,
                position,
            });
        };

        initMap();
    }, [latitude, longitude]);

    return (
        <div
            ref={mapRef}
            className="w-full h-[300px] rounded-xl overflow-hidden"
        />
    );
}