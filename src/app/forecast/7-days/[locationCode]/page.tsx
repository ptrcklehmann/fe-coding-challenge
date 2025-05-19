import DailyForecastAccordion from "@/app/components/forecastAccordion";
import { fetchForecastByLocation } from "@/lib/api";
import { Metadata } from "next";

type Params = {
  params: Promise<{
    locationCode: string;
  }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locationCode } = await params;

  const result = await fetchForecastByLocation(locationCode);
  if (!result) {
    return {
      title: "Location not found.",
      description:
        "Detailed weather forecast for a specific location and day range.",
    };
  }
  const { location } = result;

  return {
    title: `Weather Forecast for ${location.name} (7 Days)`,
    description: `Detailed weather forecast for ${location.name} over the next 7 days.`,
  };
}

export default async function ThreeDayForecast({ params }: Params) {
  const { locationCode } = await params;

  const result = await fetchForecastByLocation(locationCode);
  if (!result) {
    return <div>Forecast data not found.</div>;
  }

  const { forecast } = result;

  return (
    <DailyForecastAccordion
      forecast={forecast}
      numberOfDays={7}
    />
  );
}
