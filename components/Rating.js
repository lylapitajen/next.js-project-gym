import { AiFillStar } from "react-icons/ai";
import "./../styles/_main.scss";
import { nanoid } from "nanoid";
const Rating = ({ rating }) => {
  return (
    <div className="rating">
      <p>{rating}.0</p>
      <div className="stars-container">
        {Array.from(Array(rating).keys()).map((_) => (
          <AiFillStar key={nanoid()} className="star" />
        ))}
      </div>
    </div>
  );
};

export default Rating;
