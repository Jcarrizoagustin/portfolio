import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useRef } from "react";

function Header() {
  const refMenu = useRef();

  const menuHandler = () => {
    refMenu.current.classList.toggle(styles.showMenu);
  };

  return (
    <div className={styles.header}>
      <nav className={styles.menu} ref={refMenu}>
        <li className={styles.link}>
          <Link onClick={menuHandler} className={styles.linkRouter} to="/">
            Sobre mi
          </Link>
        </li>
        <li className={styles.link}>
          <Link
            onClick={menuHandler}
            className={styles.linkRouter}
            to="/proyectos"
          >
            Proyectos
          </Link>
        </li>
        <li className={styles.link}>
          <Link
            onClick={menuHandler}
            className={styles.linkRouter}
            to="/contacto"
          >
            Contacto
          </Link>
        </li>
      </nav>
      <div className={styles.menuIcon} onClick={menuHandler}>
        <FiMenu size={"36px"} />
      </div>
    </div>
  );
}

export default Header;
