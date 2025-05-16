import { Location } from "../app/types/location";

export const getLatLon = (
  coordinates: Location["coordinates"]
): { lat: number; lon: number } | null => {
  if (!coordinates) return null;
  if (
    typeof coordinates.latitude === "number" &&
    typeof coordinates.longitude === "number"
  ) {
    return { lat: coordinates.latitude, lon: coordinates.longitude };
  }
  if (
    typeof coordinates.lat === "number" &&
    typeof coordinates.lon === "number"
  ) {
    return { lat: coordinates.lat, lon: coordinates.lon };
  }
  return null;
};
