import styles from "./Feedback.module.scss";

import { Component } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countElement = (propertyName) => {
    this.setState((prevState) => {
      const value = prevState[propertyName];

      return {
        [propertyName]: value + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, bad, neutral } = this.state;
    const total = good + neutral + bad;
    if (!total) {
      return 0;
    }
    return Number((good / total) * 100).toFixed();
  }

  render() {
    const { countElement } = this;
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const stateKeys = Object.keys(this.state);

    return (
      <section className={styles.section}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={stateKeys} onLeaveFeedback={countElement} />
          <Section title="Statistics"></Section>

          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </section>
    );
  }
}

export default Feedback;
