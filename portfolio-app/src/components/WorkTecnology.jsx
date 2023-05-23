import styles from "./WorkTecnology.module.css";
import PropTypes from "prop-types";

function WorkTecnology({ name }) {
  return <span className={styles.name}>{name}</span>;
}

WorkTecnology.propTypes = {
  name: PropTypes.string,
};
export default WorkTecnology;
