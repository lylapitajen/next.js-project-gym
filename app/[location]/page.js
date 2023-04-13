import { gymLocations, gymBenefits } from "@/data/gymLocationsData";
import Image from "next/image";
import IconList from "@/components/IconList";
import { AiOutlineCheckCircle } from "react-icons/ai";
import slugify from "slugify";

import { notFound } from "next/navigation";

export const metadata = {
  title: "Elite Fitness Gyms",
  description: "Elite Fitness Gyms",
};

const GymLocation = ({ params }) => {
  const gym = gymLocations.find((loc) => loc.href.slice(1) === params.location);
  if (!gym) notFound();
  const { img, text, address, postcode, phone } = gym;
  return (
    <main className="gym-branch-section margin">
      <div className="img-container">
        <Image
          src={`/images/${img}`}
          fill={true}
          alt={`${text} Gym Branch Image`}
        />
      </div>
      <div className="gym-info-container">
        <div>
          <h1 className="page-title">{text}</h1>
          <h2>
            {address}
            <br /> {text}
            <br />
            {postcode}
          </h2>
        </div>
        <div>
          <h2 className="subheading">Contact</h2>
          <h3>{phone}</h3>
          <h3>{text.toLowerCase()}@elitefitnessgyms .co.uk</h3>
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
            Welcome to our {text} branch! Here we offer top-notch fitness
            facilities to help achieve your goals. Our gym is dedicated to
            providing our members with a comfortable, motivating and safe
            environment to work out in.
          </p>
          <p>
            We also offer flexible membership options, including monthly and
            annual memberships, so you can choose the plan that works best for
            you.
          </p>
          <IconList array={gymBenefits} Icon={AiOutlineCheckCircle} />
        </div>
      </div>
    </main>
  );
};

export default GymLocation;
