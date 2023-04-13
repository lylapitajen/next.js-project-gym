import Rating from "./Rating";
import "./../styles/_main.scss";
const reviewBubble = ({ user, review, rating, delay }) => {
  return (
    <div className="review-bubble" style={{ "--delay": `${delay}s` }}>
      <div className="review-content">
        <Rating rating={rating} />
        <h7 className="review">"{review}"</h7>
        <p>-{user}</p>
      </div>
    </div>
  );
};

export default reviewBubble;
