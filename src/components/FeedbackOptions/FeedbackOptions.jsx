import { FeedbackButton } from 'components/Notification/Notification.styled';
import { FeedbackContainer } from 'components/Notification/Notification.styled';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackContainer>
      <FeedbackButton onClick={onLeaveFeedback} name={options[0]}>
        {options[0]}
      </FeedbackButton>
      <FeedbackButton onClick={onLeaveFeedback} name={options[1]}>
        {options[1]}
      </FeedbackButton>
      <FeedbackButton onClick={onLeaveFeedback} name={options[2]}>
        {options[2]}
      </FeedbackButton>
    </FeedbackContainer>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
