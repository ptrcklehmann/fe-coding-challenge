import { Headline } from "@/components/ui/headline";
import { fetchForecastByLocation } from "@/lib/api";
import ForecastSingle from "../components/forecastSingle";

export default async function ForecastPage() {
  const result = await fetchForecastByLocation("DE0001020");
  if (!result) {
    return <div>Forecast data not found.</div>;
  }

  const { forecast } = result;
  return (
    <>
      <Headline>Berlin</Headline>
      <ForecastSingle forecast={forecast} />
    </>
  );
}
