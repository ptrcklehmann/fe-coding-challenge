"use client";
import { LOCATIONS } from "@/lib/constants";
import { ChangeEvent, Suspense } from "react";
import styles from "./selector.module.css";
import { ChevronDownIcon } from "../ui/icons/chevronDown";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const LocationSelector = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const selectedLocation = searchParams.get("location") || LOCATIONS[0].code;

  const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    if (event.target.value === LOCATIONS[0].code) {
      // if Berlin, remove parameter
      params.delete("location");
    } else {
      params.set("location", event.target.value);
    }
    const queryString = params.toString();
    router.push(queryString ? `?${queryString}` : pathname);
  };

  return (
    <div className={styles.select_box}>
      <div className={styles.select_box_current} tabIndex={0}>
        {LOCATIONS.map(({ code, name }) => (
          <div key={code} className={styles.select_box_value}>
            <input
              id={code}
              value={code}
              name="location"
              type="radio"
              className={styles.select_box_input}
              checked={selectedLocation === code}
              onChange={handleLocationChange}
            />
            <span className={styles.select_box_input_text}>{name}</span>
          </div>
        ))}
        <span className={styles.select_box_icon} aria-hidden="true">
          <ChevronDownIcon />
        </span>
      </div>
      <ul
        className={styles.select_box_list}
        role="listbox"
        aria-label="Select location"
      >
        {LOCATIONS.map(({ code, name }) => (
          <li
            key={code}
            role="option"
            aria-selected={selectedLocation === code}
            aria-label={name}
          >
            <label className={styles.select_box_item} htmlFor={code}>
              {name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
