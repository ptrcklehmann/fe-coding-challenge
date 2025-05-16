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
    if (!res.ok) return null;
    return res.json();
  } catch {
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
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}
