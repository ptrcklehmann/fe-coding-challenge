import { ReactNode } from "react";
import styles from "../page.module.css";

export default function ForecastPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={styles.page}>
      <main>{children}</main>
    </div>
  );
}
