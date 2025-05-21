import { ForecastWeatherNearby } from "@/app/types/forecast";
import { getFormattedDate } from "@/utils/date";
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
    <section className={styles.accordion}>
      {items.map((item, idx) => (
        <details
          key={item.summary.date}
          aria-labelledby={`summary-${idx}`}
          className={styles.accordion_item}
        >
          <summary className={styles.accordion_header} id={`summary-${idx}`}>
            <div className={styles.date_info}>
              <span className={styles.date}>
                {getFormattedDate(item.summary.date).date}
              </span>
              <span className={styles.weekday}>
                {getFormattedDate(item.summary.date).dayOfTheWeek}
              </span>
            </div>
            {item.summary.weather.icon ? (
              <Image
                className={styles.weather_icon}
                src={`https://cs3.wettercomassets.com/wcomv5/images/icons/weather/${item.summary.weather.icon}`}
                alt={item.summary.weather.text || "weather icon"}
                width={88}
                height={75}
                priority={idx === 0}
                sizes="(max-width: 600px) 50px, 100px"
              />
            ) : null}
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
                <li
                  key={space.type || part}
                  className={styles.detailed_forecast}
                >
                  <span className={styles.period_label}>{space.typeLabel}</span>
                  <span className={styles.period_conditions}>
                    {space.weather.icon ? (
                      <Image
                        className={styles.period_weather_icon}
                        src={`https://cs3.wettercomassets.com/wcomv5/images/icons/weather/${space.weather.icon}`}
                        alt={space.weather.text || "weather icon"}
                        width={176}
                        height={150}
                        loading="lazy"
                        sizes="(max-width: 600px) 35px, 40px"
                      />
                    ) : null}
                    {space.weather.text}
                  </span>
                  <div className={styles.period_temperature}>
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
