import { nanoid } from "nanoid";
import Link from "next/link";
import Button from "./Button";

const MembershipCard = ({ type, price, span, text }) => {
  return (
    <article className="membership-card">
      <h3>{type}</h3>
      <h4>
        {price}
        {span ? <span>{span}</span> : ""}
      </h4>
      <ul>
        {text.map((t) => {
          return <li key={nanoid}>{t}</li>;
        })}
      </ul>
      <Button modifiers={["gradient"]} href="/">
        Select
      </Button>
    </article>
  );
};

export default MembershipCard;
