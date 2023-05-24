import PropTypes from "prop-types";
import styles from "./Button.module.css";
function Button({ text, handleClick }) {
  return (
    <a href="/CV.pdf" download className={styles.button} onClick={handleClick}>
      {text}
    </a>
  );
}
Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};
export default Button;
