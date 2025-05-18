import DailyForecastAccordion from "@/app/components/forecastAccordion";
import { fetchForecast, fetchLocation } from "@/lib/api";
import { getLatLon } from "@/utils/coordinates";
import { Metadata } from "next";

type Params = {
  params: Promise<{
    dayRange: string;
    locationCode: string;
  }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { dayRange, locationCode } = await params;

  const location = await fetchLocation(locationCode);
  if (!location) {
    return {
      title: "Location not found.",
      description:
        "Detailed weather forecast for a specific location and day range.",
    };
  }

  return {
    title: `Weather Forecast for ${location.name} (${dayRange})`,
    description: `Detailed weather forecast for ${location.name} over the next ${dayRange} days.`,
  };
}

export default async function ForecastByDayRange({ params }: Params) {
  const { dayRange, locationCode } = await params;

  const location = await fetchLocation(locationCode);
  if (!location) {
    return <div>Location not found.</div>;
  }

  const coords = getLatLon(location.coordinates);
  if (!coords) {
    return <div>Coordinates not found.</div>;
  }

  const forecast = await fetchForecast(coords.latitude, coords.longitude);
  if (!forecast) {
    return <div>Forecast not found.</div>;
  }

  return (
    <DailyForecastAccordion forecast={forecast} days={parseInt(dayRange)} />
  );
}
