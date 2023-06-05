import styles from "./Work.module.css";
import WorkTecnology from "./WorkTecnology";
import PropTypes from "prop-types";
import { BsGithub } from "react-icons/bs";

function Work({ workInfo }) {
  return (
    <article className={styles.work}>
      <div className={styles.workImg}>
        <img src={workInfo.img} alt="Imagen" />
      </div>
      <div className={styles.workDetails}>
        <div className={styles.workHeader}>
          <h2 className={styles.workName}>{workInfo.title}</h2>
          <span className={styles.workDate}>{workInfo.date}</span>
        </div>
        <p className={styles.workDescription}>{workInfo.description}</p>
        <div className={styles.workTecnologies}>
          {workInfo.tecnologies.map((el, index) => (
            <WorkTecnology key={index} name={el} />
          ))}
        </div>
      </div>
      <div className={styles.links}>
        {" "}
        <a
          className={styles.link}
          href={workInfo.backLinkCode}
          target="_blank"
          rel="noreferrer"
        >
          <span>Backend</span>
          <h3 className={styles.icon}>
            <BsGithub style={{ width: "1.5rem", height: "1.5rem" }} />
          </h3>
        </a>
        <a
          className={styles.link}
          href={workInfo.frontLinkCode}
          target="_blank"
          rel="noreferrer"
        >
          <span>Frontend</span>
          <h3 className={styles.icon}>
            <BsGithub style={{ width: "1.5rem", height: "1.5rem" }} />
          </h3>
        </a>
      </div>
    </article>
  );
}
Work.propTypes = {
  workInfo: PropTypes.object,
};
export default Work;
