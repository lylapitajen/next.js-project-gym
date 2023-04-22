import Rating from "./Rating";
const reviewBubble = ({ user, review, rating }) => {
  return (
    <div className="review-bubble">
      <div className="review-content">
        <Rating rating={rating} />
        <h7 className="review">"{review}"</h7>
        <p>-{user}</p>
      </div>
    </div>
  );
};

export default reviewBubble;
