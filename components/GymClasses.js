import Link from "next/link";
import { GymClass } from "./GymClass";
import Button from "./Button";
import straxios from "@/lib/axios";

const GymClasses = ({ gymClasses }) => {
  return (
    <div className="our-classes-section margin">
      <div>
        <h2 className="section-heading">Our classes</h2>
        <h4 className="section-desc">
          Designed for all fitness levels, so whether you're a beginner or an experienced athlete, there's a class for
          you.
        </h4>
      </div>
      <div className="gym-classes-container">
        {gymClasses.map((gymClass) => {
          const { id, class: type, description, image } = gymClass;
          return <GymClass key={id} type={type} description={description} image={image} />;
        })}
      </div>
      <Button href="/" modifiers={["ghost"]}>
        View Timetable
      </Button>
    </div>
  );
};

export default GymClasses;
