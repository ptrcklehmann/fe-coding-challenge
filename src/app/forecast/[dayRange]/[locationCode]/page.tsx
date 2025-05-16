import ForecastAccordion from "@/components/forecastAccordion";
import { fetchForecast, fetchLocation } from "@/lib/api";
import { getLatLon } from "@/utils/coordinates";

type Params = {
  params: Promise<{
    dayRange: string;
    locationCode: string;
  }>;
};

export default async function ForecastByDayRange(props: Params) {
  const params = await props.params;
  const location = await fetchLocation(params.locationCode);
  if (!location) {
    return <div>Location not found.</div>;
  }

  const coords = getLatLon(location.coordinates);
  if (!coords) {
    return <div>Coordinates not found.</div>;
  }

  const forecast = await fetchForecast(coords.lat, coords.lon);

  if (!forecast) {
    return <div>Forecast not found.</div>;
  }

  return <ForecastAccordion forecast={forecast} days={parseInt(params.dayRange)} />;
}
