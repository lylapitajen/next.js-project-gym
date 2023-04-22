import Image from "next/image";
import ReviewBubble from "./ReviewBubble";
import Button from "./Button";
import Rating from "./Rating";
import { getReviews } from "@/lib/api/reviews";

const Reviews = async () => {
  const reviews = await getReviews();
  return (
    <section className="reviews-section">
      <h2 className="section-heading">Reviews</h2>
      <div className="reviews-top-section">
        <div className="reviews-summary">
          <div className="img-container">
            <Image src="/google.png" fill={true} />
          </div>
          <Rating rating={5} />
        </div>
        <Button modifiers={["gradient small"]}>Write a review</Button>
      </div>

      <div className="reviews-container">
        {reviews.map((review) => {
          return <ReviewBubble key={review.id} {...review} />;
        })}
      </div>
    </section>
  );
};

export default Reviews;
