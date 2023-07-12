import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({onLeaveFeedback}) => {
    return (
        <div className={css['feedback-options']}>
            <button type="button" onClick={onLeaveFeedback} className={css["feedback-btn"]}>Good</button> 
            <button type="button" onClick={onLeaveFeedback} className={css["feedback-btn"]}>Neutral</button> 
            <button type="button" onClick={onLeaveFeedback} className={css["feedback-btn"]}>Bad</button> 
        </div>
    )
}