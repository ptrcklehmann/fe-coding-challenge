import Image from "next/image";
import { ForecastWeatherNearby } from "@/app/types/forecast";
import styles from "./forecastSingle.module.css";
import { getFormattedDate } from "@/lib/date";

export default function ForecastSingle({
  forecast,
}: {
  forecast: ForecastWeatherNearby;
}) {
  const forecastItem = forecast.items[0];

  return (
    <div className={styles.container}>
      <div className={styles.date_info}>
        <span className={styles.date}>
          {getFormattedDate(forecastItem.summary.date).date}
        </span>
        <span className={styles.weekday}>
          {getFormattedDate(forecastItem.summary.date).dayOfTheWeek}
        </span>
      </div>
      <div className={styles.weather_icon_container}>
      <Image
        src={`https://cs3.wettercomassets.com/wcomv5/images/icons/weather/${forecastItem.summary.weather.icon}`}
        alt={forecastItem.summary.weather.text || "weather icon"}
        width={176}
        height={150}
        priority
        className={styles.weather_icon}
      />
        </div>
      <div className={styles.temperature}>
        <span className={styles.max_temp}>
          {forecastItem.summary.temperature.max}°
        </span>
        <span className={styles.min_temp}>
          {forecastItem.summary.temperature.min}°
        </span>
      </div>
    </div>
  );
}
