import Link from "next/link";
import { gymClasses } from "./../data/gymClassesData";
import { GymClass } from "./GymClass";
import Button from "./Button";
const GymClasses = () => {
  return (
    <div className="our-classes-section margin">
      <h2>Our classes</h2>
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
