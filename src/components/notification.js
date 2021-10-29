import React from "react";
import styles from "../components/styles.module.css";
import PropTypes from "prop-types";

export function Notification({ message }) {
  return (
    <div className={styles.notification}>
      <p>{message}</p>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
