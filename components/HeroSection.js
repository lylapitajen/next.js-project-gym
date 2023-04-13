import Link from "next/link";
import "../styles/_main.scss";
import Button from "./Button";

const HeroSection = () => {
  return (
    <>
      {/* <NavImage /> */}
      <div className="hero-section">
        <div className="margin">
          <div className="hero-content">
            <h2 className="large-heading">
              Unleash <br />
              your <span>inner</span>
              <br /> <span>athlete</span>.
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
    </>
  );
};

export default HeroSection;
