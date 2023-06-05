import Button from "./Button";
import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          <h1 className={styles.name}>Agustin Carrizo</h1>
          <h5 className={styles.job}>Programador Backend</h5>
        </div>
        <p className={styles.text}>
          Hola 👋, mi nombre es Agustin, soy estudiante de Ingeniería
          Informática. Me encanta el mundo del desarrollo de software. Poseo
          conocimientos sólidos en Java, su framework Spring, y un amplio
          abanico de tecnologías que dominan el desarrollo web como HTML, CSS,
          JavaScript y React. Mi principal objetivo es seguir desarrollando y
          mejorando estas habilidades, enfrentarme a nuevos desafíos que me
          permitan salir de mi zona de confort y crecer.
        </p>
      </div>
      <Button
        text={"Descargar CV"}
        handleClick={() => console.log("Descargando cv")}
      />
    </div>
  );
}

export default Main;
