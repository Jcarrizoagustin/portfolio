import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.menu}>
        <li className={styles.link}>
          <Link className={styles.linkRouter} to="/">
            Sobre mi
          </Link>
        </li>
        <li className={styles.link}>
          <Link className={styles.linkRouter} to="/proyectos">
            Proyectos
          </Link>
        </li>
        <li className={styles.link}>
          <Link className={styles.linkRouter} to="/contacto">
            Contacto
          </Link>
        </li>
      </nav>
    </div>
  );
}

export default Header;
