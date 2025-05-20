import { Location } from "@/app/types/location";
import { ForecastWeatherNearby } from "@/app/types/forecast";

const API_HEADERS = {
  token: "rZP2E6Zy0JsbR3gh21Y4SDvEFU",
  "X-Application-ID": "com.wetter/web-react/coding-challenge",
};

async function fetchFromApi<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, {
      headers: API_HEADERS,
      next: { revalidate: 600 },
    });

    if (!res.ok) {
      console.error(`Failed to fetch data: ${res.statusText}`);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", url, error);
    return null;
  }
}

async function fetchLocation(locationCode: string): Promise<Location | null> {
  return fetchFromApi<Location>(
    `https://api.wttr.io/web-app/v1/locations/${locationCode}/`
  );
}

async function fetchForecast(
  lat: number,
  lon: number
): Promise<ForecastWeatherNearby | null> {
  return fetchFromApi<ForecastWeatherNearby>(
    `https://api.wttr.io/web-app/v1/weather/forecast/${lat}/${lon}/`
  );
}

export async function fetchForecastByLocation(
  locationCode: string
): Promise<{ location: Location; forecast: ForecastWeatherNearby } | null> {
  const location = await fetchLocation(locationCode);

  if (!location || !location.coordinates) {
    console.error("Location not found or invalid coordinates:", locationCode);
    return null;
  }

  const { latitude, longitude } = location.coordinates;

  if (latitude == null || longitude == null) {
    console.error("Invalid coordinates for location:", locationCode);
    return null;
  }

  const forecast = await fetchForecast(latitude, longitude);

  if (!forecast) {
    console.error("Forecast not found for location:", locationCode);
    return null;
  }

  return { location, forecast };
}
