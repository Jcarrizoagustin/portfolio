import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.menu}>
        <li className={styles.link}>Sobre Mi</li>
        <li className={styles.link}>Proyectos</li>
        <li className={styles.link}>Contacto</li>
      </nav>
    </div>
  );
}

export default Header;
