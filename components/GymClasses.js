import Link from "next/link";
import { gymClasses } from "./../data/gymClassesData";
import { GymClass } from "./GymClass";
import Button from "./Button";
const GymClasses = () => {
  return (
    <div className="our-classes-section margin">
      <div>
        <h2 className="section-heading">Our classes</h2>
        <h4 className="section-desc">
          Designed for all fitness levels, so whether you're a beginner or an
          experienced athlete, there's a class for you.
        </h4>
      </div>
      <div className="gym-classes-container">
        {gymClasses.map((gymClass) => {
          const { id, type, text, image } = gymClass;
          return <GymClass key={id} type={type} text={text} image={image} />;
        })}
      </div>
      <Button href="/" modifiers={["ghost"]}>
        View Timetable
      </Button>
    </div>
  );
};

export default GymClasses;
