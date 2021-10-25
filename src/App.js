import { Component } from "react";
// import styles from "./components/styles.module.css";
import { Counter } from "./components/counter";

// function App() {
//   return <div className="App"></div>;
// }

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  handleIncrementNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleIncrementBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const {
      state,
      handleIncrementGood,
      handleIncrementNeutral,
      handleIncrementBad,
    } = this;
    return (
      <div className="App">
        <h1>Please leave feedback</h1>
        <Counter
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          handleIncrementGood={handleIncrementGood}
          handleIncrementNeutral={handleIncrementNeutral}
          handleIncrementBad={handleIncrementBad}
        />
        {/* <button onClick={handleIncrementGood}>Good</button>
        <button onClick={handleIncrementNeutral}>Neutral</button>
        <button onClick={handleIncrementBad}>Bad</button> */}
        {/* <h2>Statistics</h2>
        <div className={styles.items}>
          <span>Good:</span>
          <p>{state.good}</p>
        </div> */}
        {/* <div className={styles.items}>
          <span>Neutral:</span>
          <p>{state.neutral}</p>
        </div>
        <div className={styles.items}>
          <span>Bad:</span>
          <p>{state.bad}</p>
        </div> */}
      </div>
    );
  }
}

export default App;
