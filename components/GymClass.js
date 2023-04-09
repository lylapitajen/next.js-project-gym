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
      <h3>{type}</h3>
      <h4>{text}</h4>
    </article>
  );
};
