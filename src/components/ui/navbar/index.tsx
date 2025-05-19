import { HomeIcon } from '../icons/home';
import styles from './navbar.module.css';
import NextLink from 'next/link';

export const Navbar = () => {
    return (
      <nav className={styles.navbar}>
        <NextLink href="/" className={styles.home_link}>
          <HomeIcon width={18} height={18} />
          Home
        </NextLink>
      </nav>
    );
    }