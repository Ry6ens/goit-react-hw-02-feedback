// import styles from "../components/styles.module.css";
import PropTypes from "prop-types";
import shortid from "shortid";

export function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <>
      {options.map((option) => (
        <button
          key={shortid.generate()}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  countTotalFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
