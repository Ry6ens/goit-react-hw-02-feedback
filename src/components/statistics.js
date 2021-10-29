import styles from "../components/styles.module.css";
import PropTypes from "prop-types";

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <div className={styles.items}>
        <span>Good:</span>
        <p>{good}</p>
      </div>
      <div className={styles.items}>
        <span>Neutral:</span>
        <p>{neutral}</p>
      </div>
      <div className={styles.items}>
        <span>Bad:</span>
        <p>{bad}</p>
      </div>
      <div className={styles.items}>
        <span>Total:</span>
        <p>{total}</p>
      </div>
      <div className={styles.items}>
        <span>Positive feedback:</span>
        <p>{positivePercentage} %</p>
      </div>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
