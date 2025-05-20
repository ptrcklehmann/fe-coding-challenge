import React from "react";
import styles from "./page.module.css";
import { SomeImage } from "@/components/someImage";
import { Headline } from "@/components/ui/headline";

const HomePage: React.FC = () => {
  return (
    <main className={styles.page}>
      <Headline>wetter.com coding challenge</Headline>
      <SomeImage />
    </main>
  );
};

export default HomePage;
