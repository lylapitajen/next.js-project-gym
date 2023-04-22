import Link from "next/link";
import MembershipCard from "./MembershipCard";

const Memberships = ({ memberships, readMore }) => {
  return (
    <div className="margin memberships-section">
      <div>
        <h4 className="section-desc">Become a member today and enjoy exclusive benefits.</h4>
      </div>
      <div className="memberships-container">
        {memberships.map((membership) => {
          return <MembershipCard key={membership.id} {...membership} />;
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
