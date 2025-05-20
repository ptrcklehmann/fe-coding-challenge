import { ReactNode } from "react";
import styles from "../page.module.css";

export default function ForecastPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <main className={styles.page}>{children}</main>;
}
