
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

updatePositiveFeedback = (event) => {
  // const target = event.currentTarget;
  this.setState(prevState => ({
    good: prevState.good + 1,
  }));
};
updateNeutralFeedback = (event) => {
  // const target = event.currentTarget;
  this.setState(prevState => ({
    neutral: prevState.neutral + 1,
  }));
};
updateNegativeFeedback = (event) => {
  // const target = event.currentTarget;
  this.setState(prevState => ({
    bad: prevState.bad + 1,
  }));
};
countTotalFeedback = () => {
 return this.state.good + this.state.neutral + this.state.bad;
}
countPositiveFeedbackPercentage = () => {
  return this.state.good / this.countTotalFeedback()
}
  render() {
    return (
      <>
        <p>Please leave feedback</p>
        <button onClick={this.updatePositiveFeedback}>Good</button>
        <button onClick={this.updateNeutralFeedback}>Neutral</button>
        <button onClick={this.updateNegativeFeedback}>Bad</button>
        <h1>Statistics</h1>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {Math.round(this.countPositiveFeedbackPercentage() * 100)}%</p>
      </>
    );
  }
}
