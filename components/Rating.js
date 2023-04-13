import { AiFillStar } from "react-icons/ai";
import "./../styles/_main.scss";
const Rating = ({ rating }) => {
  return (
    <div className="rating">
      <p>{rating}.0</p>
      <div className="stars-container">
        {Array.from(Array(rating).keys()).map((_) => (
          <AiFillStar className="star" />
        ))}
      </div>
    </div>
  );
};

export default Rating;
