import React from "react";
import styles from "./page.module.css";
import { SomeImage } from "@/components/someImage";

const HomePage: React.FC = () => {
  return (
    <main className={styles.page}>
      <h1>wetter.com coding challenge</h1>
      <SomeImage />
    </main>
  );
};

export default HomePage;
