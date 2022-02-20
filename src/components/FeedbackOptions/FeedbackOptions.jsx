export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <button onClick={onLeaveFeedback} name={options[0]} >{options[0]}</button>
      <button onClick={onLeaveFeedback} name={options[1]} >{options[1]}</button>
      <button onClick={onLeaveFeedback} name={options[2]} >{options[2]}</button>
    </>
  );
}
