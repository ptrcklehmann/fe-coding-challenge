import { ForecastWeatherNearby } from "@/app/types/forecast";
import { getFormattedDate } from "@/lib/date";
import Image from "next/image";
import React from "react";
import styles from "./accordion.module.css";

interface ForecastAccordionProps {
  forecast: ForecastWeatherNearby;
  days: number;
}

const ForecastAccordion: React.FC<ForecastAccordionProps> = ({
  forecast,
  days,
}) => {
  const items = forecast.items.slice(0, days);

  return (
    <section>
      {items.map((item, idx) => (
        <details key={item.summary.date} className={styles.accordionItem}>
          <summary key={item.summary.date} className={styles.accordionHeader}>
              <span>{getFormattedDate(item.summary.date).dayOfTheWeek}</span>
              <span>{getFormattedDate(item.summary.date).date}</span>
              <span>
                {item.summary.temperature.min}°C /{" "}
                {item.summary.temperature.max}°C
              </span>
              {item.summary.weather.icon && (
                <Image
                  src={`https://cs3.wettercomassets.com/wcomv5/images/icons/weather/${item.summary.weather.icon}`}
                  alt={item.summary.weather.text || "weather icon"}
                  className={styles.headerImage}
                  width={70}
                  height={60}
                  priority

                />
              )}
          </summary>
          <div id={`details-${idx}`}>
            <ul className={styles.details}>
              {["morning", "afternoon", "evening", "night"].map((part) => {
                const space = item.spaces.find((s) => s.type === part);
                if (!space) return null;
                return (
                  <li key={space.type || part}>
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
                    <span style={{ marginLeft: 8 }}>{space.weather.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </details>
      ))}
    </section>
  );
};

export default ForecastAccordion;
