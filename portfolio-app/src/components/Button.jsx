import PropTypes from "prop-types";
import styles from "./Button.module.css";
function Button({ text }) {
  return (
    <a href="/Agustin_Carrizo-CV.pdf" download className={styles.button}>
      {text}
    </a>
  );
}
Button.propTypes = {
  text: PropTypes.string,
};
export default Button;
