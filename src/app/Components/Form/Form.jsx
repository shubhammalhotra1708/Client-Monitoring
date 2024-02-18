import styles from './Form.module.css';

const Form = () => {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Lab Name:
        <input type="text" className={styles.input} required />
      </label>
      <label className={styles.label}>
        Client Name:
        <input type="text" className={styles.input} required />
      </label>
      <label className={styles.label}>
        Client Hostname/IP:
        <input type="text" className={styles.input} required />
      </label>
      <label className={styles.label}>
        Host Port:
        <input type="text" className={styles.input} required />
      </label>
      <label className={styles.label}>
        Admin Username:
        <input type="text" className={styles.input} required />
      </label>
      <label className={styles.label}>
        Admin Password:
        <input type="password" className={styles.input} required />
      </label>
      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.button}>Add</button>
      </div>
    </form>
  );
};

export default Form;