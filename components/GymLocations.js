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
      <h2 className="margin">Our Gyms</h2>
      <Splide aria-label="Gym locations" options={options}>
        {gymLocations.map((gym) => {
          const { img, location } = gym;
          return (
            <SplideSlide key={img}>
              <Image src={`/images/${img}`} fill={true}></Image>
              <h3>{location}</h3>
            </SplideSlide>
          );
        })}
      </Splide>
      <Button modifiers={["btn ghost"]}>Book a tour</Button>
    </div>
  );
};

export default GymLocations;
