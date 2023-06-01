import styles from "./Contact.module.css";
import { BsLinkedin, BsTwitter, BsWhatsapp, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { ImLocation } from "react-icons/im";

function Contact() {
  return (
    <div className={styles.container}>
      <h3 className={styles.contactTitle}>Contacto</h3>
      <div className={styles.contactItems}>
        <a
          href="https://www.linkedin.com/in/jcarrizoagustin/"
          target="_blank"
          rel="noreferrer"
          className={styles.contact}
        >
          <BsLinkedin />
          <h3 className={styles.contactName}>LinkedIn</h3>
        </a>
        <a
          href="https://wa.link/ezfgtq"
          target="_blank"
          rel="noreferrer"
          className={styles.contact}
        >
          <BsWhatsapp />
          <h3 className={styles.contactName}>WhatsApp</h3>
        </a>
        <a
          href="https://github.com/Jcarrizoagustin"
          target="_blank"
          rel="noreferrer"
          className={styles.contact}
        >
          <BsGithub />
          <h3 className={styles.contactName}>GitHub</h3>
        </a>
        <a
          href="mailto:jcarrizoagustin@gmail.com"
          target="_blank"
          rel="noreferrer"
          className={styles.contact}
        >
          <SiGmail />
          <h3 className={styles.contactName}>Gmail</h3>
        </a>
        <a
          href="https://twitter.com/Agustincarrizo_"
          target="_blank"
          rel="noreferrer"
          className={styles.contact}
        >
          <BsTwitter />
          <h3 className={styles.contactName}>Twitter</h3>
        </a>
      </div>
      <div className={styles.location}>
        <ImLocation />
        <h4 className={styles.locationCity}>Catamarca, Argentina</h4>
      </div>
    </div>
  );
}

export default Contact;
