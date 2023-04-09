import Link from "next/link";
import "../styles/_main.scss";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="margin">
        <div className="hero-content">
          <h2>
            Unleash <br />
            your inner
            <br /> athlete.
          </h2>
          <h4>
            Unlock your potential and achieve peak performance at one of our
            elite gyms
          </h4>
          <Button href="/membership" modifiers={["gradient", "large"]}>
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
