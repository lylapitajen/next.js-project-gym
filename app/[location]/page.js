import { gymBenefits } from "@/data/gymLocationsData";
import Image from "next/image";
import IconList from "@/components/IconList";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { findGymBranch } from "@/lib/api/gymLocations";
import { strapiImage } from "@/lib/utils";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Elite Fitness Gyms",
  description: "Elite Fitness Gyms",
};
const GymLocation = async ({ params }) => {
  const [gymBranch] = await findGymBranch(params.location);

  const { image, city, streetAddress, postcode, phone } = gymBranch;
  return (
    <main className="gym-branch-section margin">
      <div className="img-container">
        <Image src={strapiImage(image, "large")} fill={true} alt={`${city} Gym Branch Image`} />
      </div>
      <div className="gym-info-container">
        <div>
          <h1 className="page-title">{city}</h1>
          <h3>
            {streetAddress}
            <br /> {city}
            <br />
            {postcode}
          </h3>
        </div>
        <div>
          <h2 className="subheading">Contact</h2>
          <h3>{phone}</h3>
          <h3>{city.toLowerCase()}@elitefitnessgyms .co.uk</h3>
        </div>
        <div>
          <h2 className="subheading">Opening times</h2>
          <h3>
            Monday-Sunday
            <br />
            05:00-00:00
          </h3>
        </div>
        <div className="gym-summary-container">
          <p>
            Welcome to our {city} branch! Here we offer top-notch fitness facilities to help achieve your goals. Our gym
            is dedicated to providing our members with a comfortable, motivating and safe environment to work out in.
          </p>
          <p>
            We also offer flexible membership options, including monthly and annual memberships, so you can choose the
            plan that works best for you.
          </p>
          <IconList array={gymBenefits} Icon={AiOutlineCheckCircle} />
        </div>
      </div>
    </main>
  );
};

export default GymLocation;
