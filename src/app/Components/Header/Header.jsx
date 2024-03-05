
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Client Monitoring Server</h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.link}>
              Clients
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/Hosts" className={styles.link}>
                Hosts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;