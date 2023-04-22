import { strapiImage } from "@/lib/utils";
import Image from "next/image";

export const GymClass = ({ type, description, image }) => {
  return (
    <article className="class-container">
      <div className="img-container" style={{ height: "60vh", maxWidth: "100%" }}>
        <Image src={strapiImage(image, "medium")} fill={true} alt="Gym class image" />
      </div>
      <h3 className="subheading">{type}</h3>
      <p>{description}</p>
    </article>
  );
};
