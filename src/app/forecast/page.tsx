"use client";
import React from "react";
import NextLink from "next/link";
import { LocationSelector } from "@/components/locationSelector";
import { useSearchParams } from "next/navigation";
import { getLocationName } from "@/lib/location";

const ForecastPage: React.FC = () => {
  const searchParams = useSearchParams();
  const selectedLocation = searchParams.get("location") || "DE0001020"; // Default to Berlin
  const locationName = getLocationName(selectedLocation);
  return (
    <>
      <LocationSelector />
      <h1>Weather Forecast for {locationName}</h1>
      <nav style={{ marginBottom: 16 }}>
        <NextLink
          href={`/forecast/3-days/${selectedLocation}`}
          style={{ marginRight: 12 }}
        >
          3 Days
        </NextLink>
        <NextLink href={`/forecast/7-days/${selectedLocation}`}>
          7 Days
        </NextLink>
      </nav>
    </>
  );
};

export default ForecastPage;
