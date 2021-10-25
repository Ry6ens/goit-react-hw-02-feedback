import styles from "../components/styles.module.css";

export function Counter({
  good,
  neutral,
  bad,
  handleIncrementGood,
  handleIncrementNeutral,
  handleIncrementBad,
}) {
  return (
    <div>
      <button onClick={handleIncrementGood}>Good</button>
      <button onClick={handleIncrementNeutral}>Neutral</button>
      <button onClick={handleIncrementBad}>Bad</button>
      <h2>Statistics</h2>
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
    </div>
  );
}
