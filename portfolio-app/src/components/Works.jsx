import styles from "./Works.module.css";
import Work from "./Work";
import Challenge from "./Challenge";

const info1 = {
  img: "/img/Hoteleria.png",
  title: "Spark Hotel",
  date: "Marzo - 2023",
  description:
    "Sistema de reservas de habitaciones. Desarrollado con Spring y sus modulos Spring Boot, Spring Data JPA y PostgreSQL para la persitencia de datos, Spring Web, Spring Security para la seguridad. API REST. Frontend creado con React JS. Otras librerias usadas: React Rounter Dom.",
  tecnologies: ["Spring Boot", "Spring Security", "React", "CSS"],
  backLinkCode: "https://github.com/Jcarrizoagustin/hoteleria/tree/master",
  frontLinkCode:
    "https://github.com/Jcarrizoagustin/hoteleria-front/tree/main/hoteleria",
};

const info4 = {
  img: "/img/MiTienda.jpg",
  title: "Mi Tienda",
  date: "Agosto - 2023",
  description:
    "Mi tienda es una pequeña aplicacion web creada con React, inspirada en la tienda de Dia, que simula el proceso de compra de productos, en este caso bebidas.",
  tecnologies: ["React", "CSS modules", "Hooks"],
  backLinkCode: "https://github.com/Jcarrizoagustin/mi-tienda",
  frontLinkCode: "https://github.com/Jcarrizoagustin/mi-tienda",
  demoLinkCode: "https://mitiendabebidas.netlify.app/",
};

const info3 = {
  img: "/img/Inmobiliaria.png",
  title: "Inmobiliaria",
  date: "Noviembre - 2022",
  description:
    "Trabajo de laboratorio para la cátedra Programación II de la carrera Ingeniería Informática. Caso de estudio: Inmobiliaria. El laboratorio fue desarrollado en Java, siguiendo y aplicando los principios del paradigma orientado a objetos en conjunto con el patrón de diseño Modelo-Vista-Controlador (MVC). Su interfaz gráfica se desarrollo con Swing. ",
  tecnologies: ["Java", "Swing", "POO", "JUnit"],
  backLinkCode: "https://gitlab.com/agustincrz/inmobiliaria",
  frontLinkCode: "https://gitlab.com/agustincrz/inmobiliaria",
  demoLinkCode: "",
};

const info2 = {
  img: "/img/AuthApp.png",
  title: "Authentication App",
  date: "Junio - 2023",
  description:
    "Challenge fullstack de devchallenges.io. El desarrollo backend se realizo con Java 17, Spring Boot 3, Spring Security 6, autenticacion JWT y PostgreSQL. El desarrollo frontend se llevo a cabo con React.",
  tecnologies: [
    "Java",
    "Spring Boot",
    "React",
    "JWT",
    "PostgreSQL",
    "CSS Modules",
  ],
  backLinkCode: "https://github.com/Jcarrizoagustin/authenticationBack",
  frontLinkCode: "https://github.com/Jcarrizoagustin/authentication-app",
  demoLinkCode: "https://main--storied-axolotl-6907c0.netlify.app",
};

const challenge1 = {
  img: "/img/MyTeamChallenge.png",
  title: "My Team Challenge",
  date: "Agosto - 2019",
  description: "Challenge de Devchallenges.io ",
  tecnologies: ["HTML", "CSS", "Grid", "Flexbox", "Responsive"],
  deployLinkCode: "https://jcarrizoagustin.github.io/my-team-challenge/",
  frontLinkCode: "https://github.com/Jcarrizoagustin/my-team-challenge",
  challengeLink: "https://devchallenges.io/challenges/hhmesazsqgKXrTkYkt0U",
};

const challenge2 = {
  img: "/img/TestimonialsGrid.png",
  title: "Testimonials Grid",
  date: "Agosto - 2019",
  description: "Challenge de Frontendmentor.io ",
  tecnologies: ["HTML", "CSS", "Grid", "Flexbox", "Responsive"],
  deployLinkCode: "https://jcarrizoagustin.github.io/testimonials-grid/",
  frontLinkCode: "https://github.com/Jcarrizoagustin/testimonials-grid",
  challengeLink:
    "https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7",
};

const challenge3 = {
  img: "/img/GridComponentMaster.png",
  title: "Grid Component Master",
  date: "Mayo - 2021",
  description: "Challenge de Frontendmentor.io ",
  tecnologies: ["HTML", "CSS", "Grid", "Flexbox", "Responsive"],
  deployLinkCode: "https://jcarrizoagustin.github.io/grid-componet-master/",
  frontLinkCode: "https://github.com/Jcarrizoagustin/grid-componet-master",
  challengeLink:
    "https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc",
};

const challenge4 = {
  img: "/img/InteriorConsultant.png",
  title: "Interior Consultant",
  date: "Julio - 2021",
  description: "Challenge de Devchallenges.io ",
  tecnologies: ["HTML", "CSS", "Flexbox", "Responsive"],
  deployLinkCode:
    "https://jcarrizoagustin.github.io/interior-consultant-challenge/",
  frontLinkCode:
    "https://github.com/Jcarrizoagustin/interior-consultant-challenge",
  challengeLink: "https://devchallenges.io/challenges/Jymh2b2FyebRTUljkNcb",
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
        <Work workInfo={info4} />
        <Work workInfo={info3} />
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
        <Challenge workInfo={challenge1} />
        <Challenge workInfo={challenge2} />
        <Challenge workInfo={challenge3} />
        <Challenge workInfo={challenge4} />
      </section>
    </>
  );
}

export default Works;
