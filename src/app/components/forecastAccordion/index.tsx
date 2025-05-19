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
        <details key={item.summary.date} className={styles.accordionItem}>
          <summary key={item.summary.date} className={styles.accordionHeader}>
            {item.summary.weather.icon && (
              <div className={styles.weatherIcon}>
                <Image
                  src={`https://cs3.wettercomassets.com/wcomv5/images/icons/weather/${item.summary.weather.icon}`}
                  alt={item.summary.weather.text || "weather icon"}
                  width={100}
                  height={90}
                  priority
                />
              </div>
            )}
            <div className={styles.dateInfo}>
              <span className={styles.date}>
                {getFormattedDate(item.summary.date).date}
              </span>
              <span className={styles.weekday}>
                {getFormattedDate(item.summary.date).dayOfTheWeek}
              </span>
            </div>
            <div className={styles.temperature}>
              <span className={styles.maxTemp}>
                {item.summary.temperature.max}°
              </span>
              /
              <span className={styles.minTemp}>
                {item.summary.temperature.min}°
              </span>
            </div>
          </summary>
          <ul className={styles.accordionContent} id={`details-${idx}`}>
            {["morning", "afternoon", "evening", "night"].map((part) => {
              const space = item.spaces.find((s) => s.type === part);
              if (!space) return null;
              return (
                <li key={space.type || part} className={styles.spaceItem}>
                  <strong>{space.typeLabel}</strong>
                  {space.temperature.min}°C / {space.temperature.max}°C
                  {space.weather.icon && (
                    <Image
                      src={`https://cs3.wettercomassets.com/wcomv5/images/icons/weather/${space.weather.icon}`}
                      alt={space.weather.text || "weather icon"}
                      width={30}
                      height={30}
                      priority
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginLeft: 8,
                      }}
                    />
                  )}
                  <span className={styles.conditions}>
                    {space.weather.text}
                  </span>
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
