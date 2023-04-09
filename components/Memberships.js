import { memberships } from "./../data/membershipsData";
import MembershipCard from "./MembershipCard";
const Memberships = () => {
  console.log(memberships);
  return (
    <div className="margin memberships-section">
      <h2>Memberships</h2>
      <div className="memberships-container">
        {memberships.map((mem) => {
          const { id, type, price, span, text } = mem;
          return (
            <MembershipCard
              key={id}
              type={type}
              price={price}
              span={span}
              text={text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Memberships;
