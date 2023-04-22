import { nanoid } from "nanoid";
import Button from "./Button";
import { AiOutlineCheckCircle } from "react-icons/ai";
import IconList from "./IconList";

const MembershipCard = ({ type, price, interval, textArray, banner }) => {
  return (
    <article className="membership-card">
      <h3 className="subheading">{type}</h3>
      <h4>
        £{price}
        {interval ? <span>{interval}</span> : ""}
      </h4>
      <IconList array={textArray.map(({ text }) => text)} Icon={AiOutlineCheckCircle} />
      {banner && (
        <div className="banner">
          <p>{banner}</p>
        </div>
      )}
      <Button modifiers={["gradient"]} href="/memberships">
        Join now
      </Button>
    </article>
  );
};

export default MembershipCard;
