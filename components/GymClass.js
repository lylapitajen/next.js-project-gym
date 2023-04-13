import Image from "next/image";
export const GymClass = ({ type, text, image }) => {
  return (
    <article className="class-container">
      <div
        className="img-container"
        style={{ height: "60vh", maxWidth: "100%" }}
      >
        <Image src={image} fill={true}></Image>
      </div>
      <h3 className="subheading">{type}</h3>
      <p>{text}</p>
    </article>
  );
};
