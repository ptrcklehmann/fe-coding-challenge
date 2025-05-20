import { HomeIcon } from '../icons/home';
import styles from './navbar.module.css';
import NextLink from 'next/link';

export const Navbar = () => {
    return (
      <nav className={styles.navbar}>
        <NextLink href="/" className={styles.nav_link}>
          <HomeIcon width={15} height={14} />
          Home
        </NextLink>
        <NextLink href="/forecast" className={styles.nav_link}>
          Forecast
        </NextLink>
        <NextLink href="/forecast/3-days/DE0001020" className={styles.nav_link}>
          3 Days
        </NextLink>
        <NextLink href="/forecast/7-days/DE0001020" className={styles.nav_link}>
          7 Days
        </NextLink>
      </nav>
    );
    }