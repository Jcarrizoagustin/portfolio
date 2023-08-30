import Button from "./Button";
import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          <h1 className={styles.name}>Agustin Carrizo</h1>
          <h5 className={styles.job}>Programador Web</h5>
        </div>
        <p className={styles.text}>
          Hola 👋, mi nombre es Agustin, soy estudiante de Ingeniería
          Informática. Dentro de este maravilloso universo, descubrí un profundo
          interés por todo lo relacionado con el desarrollo de software. Mi
          primera toma de contacto con la programación fue en C, donde aprendí
          desde lo mas básico como lo son los tipos de datos, variables, bucles,
          condicionales, hasta conceptos mas avanzados como así tambien
          diferentes paradigmas. Hoy tengo conocimientos en Java, Spring, HTML,
          CSS, JavaScript, React, Bases de datos, Git, entre otras tecnologías
          más. Mi principal objetivo es seguir desarrollando todo lo que he
          aprendido, y porque no, adquirir nuevas habilidades.
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
