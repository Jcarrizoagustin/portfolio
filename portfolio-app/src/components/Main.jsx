import styles from "./Main.module.css";
function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1 className={styles.name}>Agustin Carrizo</h1>
        <h5 className={styles.job}>Backend Developer</h5>
      </div>
      <p className={styles.text}>
        Soy estudiante de Ingeniería Informática. Apasionado por el mundo del
        desarrollo de software. Poseo conocimientos sólidos en Java, su
        framework Spring, y un amplio abanico de tecnologías que dominan el
        desarrollo web como HTML, CSS, JavaScript y React. Mi principal objetivo
        es seguir desarrollando y mejorando estas habilidades, enfrentarme a
        desafíos que me hagan salir de mi zona de confort y crecer.
      </p>
    </div>
  );
}

export default Main;
