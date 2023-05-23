import styles from "./Contact.module.css";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <div className={styles.conteiner}>
      <h3 className={styles.contactTitle}>Contacto</h3>
      <div className={styles.contactItems}>
        <div className={styles.contact}>
          <BsLinkedin />
          <h3 className={styles.contactName}>LinkedIn</h3>
        </div>
        <div className={styles.contact}>
          <SiGmail />
          <h3 className={styles.contactName}>Gmail</h3>
        </div>
        <div className={styles.contact}>
          <BsInstagram />
          <h3 className={styles.contactName}>Instagram</h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;
