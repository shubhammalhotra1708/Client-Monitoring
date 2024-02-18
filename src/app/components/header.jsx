import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Welcome to Client Monitoring Server</h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Clients</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/hosts">Hosts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;