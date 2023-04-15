import Link from "next/link";
import { memberships } from "./../data/membershipsData";
import MembershipCard from "./MembershipCard";
import { nanoid } from "nanoid";

const Memberships = ({ readMore }) => {
  return (
    <div className="margin memberships-section">
      <div>
        <h4 className="section-desc">
          Become a member today and enjoy exclusive benefits.
        </h4>
      </div>
      <div className="memberships-container">
        {memberships.map((membership) => {
          return <MembershipCard key={nanoid()} {...membership} />;
        })}
      </div>
      {readMore && (
        <Link className="read-more" href={"/memberships"}>
          Read more
          <span></span>
        </Link>
      )}
    </div>
  );
};

export default Memberships;
