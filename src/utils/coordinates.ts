import { Location } from "../app/types/location";

type LatitudeLongitude = {
  latitude: number;
  longitude: number;
};

export const getLatLon = (
  coordinates: Location["coordinates"]
): LatitudeLongitude | null => {
  if (!coordinates) return null;

  const { latitude, longitude, lat, lon } = coordinates;

  if (typeof latitude === "number" && typeof longitude === "number") {
    return { latitude, longitude };
  }

  if (typeof lat === "number" && typeof lon === "number") {
    return { latitude: lat, longitude: lon };
  }

  return null;
};
