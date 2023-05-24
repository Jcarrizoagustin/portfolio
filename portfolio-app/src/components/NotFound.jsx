import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.errorContainer}>
      <h2 className={styles.errorMessage}>Error - Página no encontrada</h2>
    </div>
  );
}

export default NotFound;
