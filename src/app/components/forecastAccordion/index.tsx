import { ForecastWeatherNearby } from "@/app/types/forecast";
import { getFormattedDate } from "@/lib/date";
import Image from "next/image";
import React from "react";
import styles from "./accordion.module.css";

type DailyForecastAccordionProps = {
  forecast: ForecastWeatherNearby;
  numberOfDays: number;
};

const DailyForecastAccordion: React.FC<DailyForecastAccordionProps> = ({
  forecast,
  numberOfDays,
}) => {
  const items = forecast.items.slice(0, numberOfDays);

  return (
    <section>
      {items.map((item, idx) => (
        <details key={item.summary.date} className={styles.accordion_item}>
          <summary key={item.summary.date} className={styles.accordion_header}>
            <div className={styles.date_info}>
              <span className={styles.date}>
                {getFormattedDate(item.summary.date).date}
              </span>
              <span className={styles.weekday}>
                {getFormattedDate(item.summary.date).dayOfTheWeek}
              </span>
            </div>
            {item.summary.weather.icon && (
              <Image
                src={`https://cs3.wettercomassets.com/wcomv5/images/icons/weather/${item.summary.weather.icon}`}
                alt={item.summary.weather.text || "weather icon"}
                width={100}
                height={90}
                priority
                className={styles.weather_icon}
              />
            )}
            <div className={styles.temperature}>
              <span className={styles.max_temp}>
                {item.summary.temperature.max}°
              </span>
              <span className={styles.min_temp}>
                {item.summary.temperature.min}°
              </span>
            </div>
          </summary>
          <ul className={styles.accordion_content} id={`details-${idx}`}>
            {["morning", "afternoon", "evening", "night"].map((part) => {
              const space = item.spaces.find((s) => s.type === part);
              if (!space) return null;
              return (
                <li key={space.type || part} className={styles.space_item}>
                  <span className={styles.period_type}>{space.typeLabel}</span>
                  <span className={styles.conditions}>
                    {space.weather.icon && (
                      <Image
                        src={`https://cs3.wettercomassets.com/wcomv5/images/icons/weather/${space.weather.icon}`}
                        alt={space.weather.text || "weather icon"}
                        width={40}
                        height={30}
                        priority
                        className={styles.space_weather_icon}
                      />
                    )}
                    {space.weather.text}
                  </span>
                  <div className={styles.space_item_temperature}>
                    <span className={styles.max_temp}>
                      {space.temperature.max}°
                    </span>
                    <span className={styles.min_temp}>
                      {space.temperature.min}°
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </details>
      ))}
    </section>
  );
};

export default DailyForecastAccordion;
