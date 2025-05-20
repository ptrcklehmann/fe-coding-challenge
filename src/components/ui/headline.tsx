import styles from "./ui.module.css";

type HeadlineProps = {
  children?: React.ReactNode;
};
export const Headline = ({ children }: HeadlineProps) => {
  return <h1 className={styles.headline}>{children}</h1>;
};
