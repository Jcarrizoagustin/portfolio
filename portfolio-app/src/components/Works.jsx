import styles from "./Works.module.css";
import Work from "./Work";

const info1 = {
  img: "https://www.omatech.com/blog/wp-content/uploads/2022/08/infografia-blog-web-SPA.jpg",
  title: "Spark Hotel",
  date: "Octubre - 2022",
  description:
    "Sistema de reservas de habitaciones. Desarrado con Spring y sus modulos Spring Boot, Spring Data JPA para la perssitencia de datos, Spring Web y Spring Security para la securizacion. API REST. Frontend creado con React JS. Otras librerias usadas: React Rounter Dom.",
  tecnologies: ["Spring Boot", "ReactJS", "CSS"],
  linkCode: "https://github.com/Jcarrizoagustin/veterinaria",
};

const info2 = {
  img: "https://www.bizneo.com/blog/wp-content/uploads/2021/04/app-para-turnos-de-trabajo.jpg",
  title: "Sistema Turnos",
  date: "Abril - 2022",
  description:
    "Lorem, quos facere iste cum dolores perspiciatis fuga nam voluptate, aspernatur vel provident nostrum blanditiis dignissimos culpa rem nihil? Quaerat, sint non natus minus accusamus harum pariatur ipsum quam sed excepturi neque deserunt reprehenderit eos!",
  tecnologies: ["Spring Boot", "Angular", "Tailwind"],
  linkCode: "https://github.com/Jcarrizoagustin/veterinaria",
};

const info3 = {
  img: "https://www.imveterinaria.es/uploads/2017/11/imveterinaria_mascoteros_lanza_1431_20130201.jpg",
  title: "Veterinaria",
  date: "Enero - 2023",
  description:
    "Lorem ipsum dolor Lorem, quos facere iste cum dolores perspiciatis fuga nam voluptate, Lorem, quos facere iste cum dolores perspiciatis fuga nam voluptate, aspernatur vel provident nostrum blanditiis sit amet consectetur adipisicing elit. Reiciendis libero minima repudiandae numquam sapiente! Quibusdam doloremque quasi perspiciatis neque quae.",
  tecnologies: ["Spring Boot", "Svelte", "SASS"],
  linkCode: "https://github.com/Jcarrizoagustin/veterinaria",
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
        <Work workInfo={info3} />
        <Work workInfo={info1} />
        <Work workInfo={info2} />
        <Work workInfo={info3} />
        <Work workInfo={info1} />
        <Work workInfo={info2} />
      </section>
    </>
  );
}

export default Works;
