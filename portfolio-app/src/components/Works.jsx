import styles from "./Works.module.css";
import Work from "./Work";

const info1 = {
  img: "https://www.omatech.com/blog/wp-content/uploads/2022/08/infografia-blog-web-SPA.jpg",
  title: "Spark Hotel",
  date: "Marzo - 2023",
  description:
    "Sistema de reservas de habitaciones. Desarrollado con Spring y sus modulos Spring Boot, Spring Data JPA para la perssitencia de datos, Spring Web y Spring Security para la securizacion. API REST. Frontend creado con React JS. Otras librerias usadas: React Rounter Dom.",
  tecnologies: ["Spring Boot", "Spring Security", "ReactJS", "CSS"],
  backLinkCode: "https://github.com/Jcarrizoagustin/hoteleria/tree/master",
  frontLinkCode:
    "https://github.com/Jcarrizoagustin/hoteleria-front/tree/main/hoteleria",
};

const info2 = {
  img: "https://www.bizneo.com/blog/wp-content/uploads/2021/04/app-para-turnos-de-trabajo.jpg",
  title: "Veterinaria",
  date: "En progreso",
  description:
    "Desarrollo de aplicacion para la administracion de una veterinaria. ",
  tecnologies: ["Spring Boot", "React JS", "CSS modules"],
  backLinkCode: "https://github.com/Jcarrizoagustin/veterinaria",
  frontLinkCode: "https://github.com/Jcarrizoagustin/veterianaria-front",
};

function Works() {
  return (
    <>
      <h2
        style={{
          fontSize: "2.5rem",
          marginTop: "3rem",
          letterSpacing: "3px",
          fontFamily: "Poppins",
        }}
      >
        Mis Proyectos
      </h2>
      <section className={styles.worksContainer}>
        <Work workInfo={info1} />
        <Work workInfo={info2} />
      </section>
      <h2
        style={{
          fontSize: "2.5rem",
          marginTop: "3rem",
          letterSpacing: "3px",
          fontFamily: "Poppins",
        }}
      >
        Challenges
      </h2>
      <section className={styles.worksContainer}>
        <Work workInfo={info1} />
        <Work workInfo={info2} />
      </section>
    </>
  );
}

export default Works;
