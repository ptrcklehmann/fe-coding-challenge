import React from "react";
import NextLink from "next/link";

const ForecastPage: React.FC = () => {
  return (
    <>
      <h1>Weather Forecast for Berlin</h1>
      <nav style={{ marginBottom: 16 }}>
        <NextLink
          href={`/forecast/3-days/DE0001020`}
          style={{ marginRight: 12 }}
        >
          3 Days
        </NextLink>
        <NextLink href={`/forecast/7-days/DE0001020`}>7 Days</NextLink>
      </nav>
      <NextLink href="/">go to Home Page</NextLink>
    </>
  );
};

export default ForecastPage;
