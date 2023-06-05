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

const info2 = {
  img: "/img/Veterinaria.png",
  title: "Veterinaria",
  date: "En progreso",
  description:
    "Desarrollo de aplicacion para la administracion de una veterinaria. El backend esta construyendose con Spring Boot, Spring Data JPA, PostgreSQL. Por el lado del frontend con React.",
  tecnologies: ["Spring Boot", "React", "CSS modules"],
  backLinkCode: "https://github.com/Jcarrizoagustin/veterinaria",
  frontLinkCode: "https://github.com/Jcarrizoagustin/veterianaria-front",
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
