import { Location } from "@/app/types/location";
import { ForecastWeatherNearby } from "@/app/types/forecast";

export async function fetchLocation(
  locationCode: string
): Promise<Location | null> {
  try {
    const res = await fetch(
      `https://api.wttr.io/web-app/v1/locations/${locationCode}/`,
      {
        headers: {
          token: "rZP2E6Zy0JsbR3gh21Y4SDvEFU",
          "X-Application-ID": "com.wetter/web-react/coding-challenge",
        },
        next: { revalidate: 600 },
      }
    );
    if (!res.ok) {
      console.error("Failed to fetch location:", res.statusText);
      return null;
    }
    return res.json();
  } catch {
    console.error("Error fetching location:", locationCode);
    return null;
  }
}

export async function fetchForecast(
  lat: number,
  lon: number
): Promise<ForecastWeatherNearby | null> {
  try {
    const res = await fetch(
      `https://api.wttr.io/web-app/v1/weather/forecast/${lat}/${lon}/`,
      {
        headers: {
          token: "rZP2E6Zy0JsbR3gh21Y4SDvEFU",
          "X-Application-ID": "com.wetter/web-react/coding-challenge",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        next: { revalidate: 600 },
      }
    );
    if (!res.ok) {
      console.error("Failed to fetch forecast:", res.statusText);
      return null;
    }
    return res.json();
  } catch {
    console.error("Error fetching forecast:", lat, lon);
    return null;
  }
}

export async function fetchForecastByLocation(
  locationCode: string
): Promise<{ location: Location; forecast: ForecastWeatherNearby } | null> {
  try {
    const location = await fetchLocation(locationCode);
    if (!location) {
      console.error("Location not found");
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
  } catch {
    console.error("Error fetching forecast by location");
    return null;
  }
}
