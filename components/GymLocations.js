"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/splide/dist/css/splide-core.min.css";
import "./../styles/_main.scss";
import Button from "./Button";
import { gymLocations } from "@/data/gymLocationsData";

const options = { type: "loop", autoplay: true, speed: 1000 };
const GymLocations = () => {
  return (
    <div className="gym-locations-section">
      <div className="margin">
        <h2 className="section-heading">Our gyms</h2>
        <h4 className="section-desc">
          Each gym offers a premium fitness experience, a welcoming atmosphere
          and a dedicated team.
        </h4>
      </div>
      <Splide aria-label="Gym locations" options={options}>
        {gymLocations.map((gym) => {
          const { img, text } = gym;
          return (
            <SplideSlide key={img}>
              <Image
                src={`/images/${img}`}
                fill={true}
                alt="Gym location image"
              ></Image>
              <h3>{text}</h3>
            </SplideSlide>
          );
        })}
      </Splide>
      <Button modifiers={["btn ghost"]}>Book a tour</Button>
    </div>
  );
};

export default GymLocations;
