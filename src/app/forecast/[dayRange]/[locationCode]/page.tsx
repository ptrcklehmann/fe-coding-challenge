import DailyForecastAccordion from "@/app/components/forecastAccordion";
import { fetchForecastByLocation } from "@/lib/api";
import { Metadata } from "next";

type Params = {
  params: Promise<{
    dayRange: string;
    locationCode: string;
  }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { dayRange, locationCode } = await params;

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
    title: `Weather Forecast for ${location.name} (${dayRange})`,
    description: `Detailed weather forecast for ${location.name} over the next ${dayRange} days.`,
  };
}

export default async function ForecastByDayRange({ params }: Params) {
  const { dayRange, locationCode } = await params;

  const result = await fetchForecastByLocation(locationCode);
  if (!result) {
    return <div>Forecast data not found.</div>;
  }

  const { forecast } = result;

  return (
    <DailyForecastAccordion
      forecast={forecast}
      numberOfDays={parseInt(dayRange)}
    />
  );
}
