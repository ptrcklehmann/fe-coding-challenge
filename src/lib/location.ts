import { LOCATIONS } from "./constants";

export const getLocationName = (locationCode: string): string => {
  const location = LOCATIONS.find((loc) => loc.code === locationCode);
  return location ? location.name : "Unknown Location";
};
