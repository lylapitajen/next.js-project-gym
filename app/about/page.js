import Image from "next/image";
import "./../../styles/_main.scss";
import SocialLinks from "@/components/SocialLinks";
import Reviews from "@/components/Reviews";
import { gymLocations } from "@/data/gymLocationsData";

export const metadata = {
  title: "About Us",
  description: "Elite Fitness Gyms",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-top-section margin">
        <div className="heading-texts">
          <h2>Elite Fitness Gyms</h2>
          <h3>Unleash your inner athlete.</h3>
        </div>
      </div>
      <div className="gym-images-container">
        {gymLocations.map((gym) => {
          return (
            <div key={gym.img} className="img-container">
              <Image
                src={`/images/${gym.img}`}
                fill={true}
                alt="Gym location image"
              />
            </div>
          );
        })}
      </div>
      <div className="gym-summary-container margin">
        <h1 className="section-heading">About Us</h1>
        <p className="gym-summary">
          Welcome to Elite Fitness Gyms! We are dedicated to helping you achieve
          your fitness goals and living a healthier lifestyle. Our
          state-of-the-art facilities provide a comfortable and motivating
          environment for you to work out in. Our experienced and certified
          trainers are always available to offer personalized guidance and
          support to help you reach your full potential.
        </p>
        <p className="gym-summary">
          We offer a variety of classes, equipment, and amenities to meet your
          individual needs and preferences. Whether you're a beginner or a
          seasoned athlete, our gyms are the perfect place to challenge
          yourself, improve your health, and have fun. Join us today and start
          your journey to a healthier, happier you.
        </p>

        <div className="social-links-container">
          <h4>Follow us</h4>
          <SocialLinks />
        </div>
      </div>
      <div className="margin">
        <Reviews />
      </div>
    </main>
  );
}
