import styles from "./Challenge.module.css";
import WorkTecnology from "./WorkTecnology";
import PropTypes from "prop-types";
import { BsGithub } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";

function Challenge({ workInfo }) {
  return (
    <article className={styles.challenge}>
      <div className={styles.challengeImg}>
        <img src={workInfo.img} alt="Imagen" />
      </div>
      <div className={styles.challengeDetails}>
        <div className={styles.challengeHeader}>
          <h2 className={styles.challengeName}>{workInfo.title}</h2>
          <span className={styles.challengeDate}>{workInfo.date}</span>
        </div>
        <p className={styles.challengeDescription}>{workInfo.description}</p>

        <span>
          <a
            style={{ color: "var(--blanco)" }}
            href={workInfo.challengeLink}
            target="_blank"
            rel="noreferrer"
          >
            Link del challenge
          </a>
        </span>

        <div className={styles.challengeTecnologies}>
          {workInfo.tecnologies.map((el, index) => (
            <WorkTecnology key={index} name={el} />
          ))}
        </div>
      </div>
      <div className={styles.links}>
        {" "}
        <a
          className={styles.link}
          href={workInfo.frontLinkCode}
          target="_blank"
          rel="noreferrer"
        >
          <span>Codigo</span>
          <h3 className={styles.icon}>
            <BsGithub style={{ width: "1.5rem", height: "1.5rem" }} />
          </h3>
        </a>
        <a
          className={styles.link}
          href={workInfo.deployLinkCode}
          target="_blank"
          rel="noreferrer"
        >
          <span>Despliegue</span>
          <h3 className={styles.icon}>
            <TbWorldWww style={{ width: "1.5rem", height: "1.5rem" }} />
          </h3>
        </a>
      </div>
    </article>
  );
}
Challenge.propTypes = {
  workInfo: PropTypes.object,
};
export default Challenge;
