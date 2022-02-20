import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  updateFeedback = (event) => {
    const {name} = event.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
// updatePositiveFeedback = (event) => {
//   // const target = event.currentTarget;
//   this.setState(prevState => ({
//     good: prevState.good + 1,
//   }));
// };
// updateNeutralFeedback = (event) => {
//   // const target = event.currentTarget;
//   this.setState(prevState => ({
//     neutral: prevState.neutral + 1,
//   }));
// };
// updateNegativeFeedback = (event) => {
//   // const target = event.currentTarget;
//   this.setState(prevState => ({
//     bad: prevState.bad + 1,
//   }));
// };
countTotalFeedback = () => {
 return this.state.good + this.state.neutral + this.state.bad;
}
countPositiveFeedbackPercentage = () => {
  return this.state.good / this.countTotalFeedback() * 100
}
  render() {
    const {good, neutral, bad} = this.state;
    return (
      <>
      <Section title={"Please leave feedback"}>
      <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.updateFeedback}></FeedbackOptions>
        </Section>
      <Section title={"Statistics"}>

        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={Math.round(this.countPositiveFeedbackPercentage())}></Statistics>
        </Section>
        
      </>
    );
  }
}
