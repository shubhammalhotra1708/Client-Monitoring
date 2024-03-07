'use client'
// import { addForm } from '@/app/Services/Actions/addForm';
import { addForm } from '@/app/Services/Actions/addForm.js';
import styles from './Form.module.css';
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={styles.button} aria-disabled={pending}>
      Add
    </button>
  );
}

const Form = () => {
  const [state, formAction] = useFormState(addForm, initialState);
  return (
    <form className={styles.form} action = {formAction}>
      <label htmlFor="labName" className={styles.label}>
        Lab Name:
        <input type="text" id="labName" name="labName" className={styles.input} required />
      </label>
      <label className={styles.label}>
        Client Name:
        <input type="text" id="clientName" name="clientName" className={styles.input} required />
      </label>
      <label className={styles.label}>
        Client Hostname/IP:
        <input type="text" id="clientHostName" name="clientHostName" className={styles.input} required />
      </label>
      <label className={styles.label}>
        Host Port:
        <input type="text" id="hostPort" name="hostPort" className={styles.input} required />
      </label>
      <label className={styles.label}>
        Admin Username:
        <input type="text" id="adminUsername" name="adminUsername" className={styles.input} required />
      </label>
      <label className={styles.label}>
        Admin Password:
        <input type="password" id="adminPassword" name="adminPassword" className={styles.input} required />
      </label>
      <div className={styles.buttonContainer}>
        {/* <button type="submit" className={styles.button}>Add</button> */}
        <SubmitButton />  
        <p aria-live="polite" className="sr-only" role="status">
          {state?.message}
        </p>
      </div>
    </form>
  );
};

export default Form;