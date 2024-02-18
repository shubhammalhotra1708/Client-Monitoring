import styles from './Table.module.css';

const Table = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          <th className={styles.th}>Lab Name</th>
          <th className={styles.th}>Client Name</th>
          <th className={styles.th}>Client Hostname/IP</th>
          <th className={styles.th}>Host Port</th>
          <th className={styles.th}>Admin Username</th>
          <th className={styles.th}>Admin Password</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.tr}>
          <td className={styles.td}>Example Lab</td>
          <td className={styles.td}>Example Client</td>
          <td className={styles.td}>Example Hostname/IP</td>
          <td className={styles.td}>Example Port</td>
          <td className={styles.td}>Example Username</td>
          <td className={styles.td}>Example Password</td>
        </tr>
      </tbody>
    </table>
  );
};
export default Table;