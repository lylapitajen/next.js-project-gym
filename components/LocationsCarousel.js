"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { strapiImage } from "@/lib/utils";
const options = { type: "loop", autoplay: true, speed: 1000 };
const LocationsCarousel = ({ gymLocations }) => {
  return (
    <Splide aria-label="Gym locations" options={options}>
      {gymLocations.map((gym) => {
        const { image, city } = gym;
        return (
          <SplideSlide key={city}>
            <Image src={strapiImage(image)} fill={true} alt="Gym location image"></Image>
            <h3>{city}</h3>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default LocationsCarousel;
