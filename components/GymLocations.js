import Button from "./Button";
import LocationsCarousel from "./LocationsCarousel";

const GymLocations = ({ gymLocations }) => {
  return (
    <div className="gym-locations-section">
      <div className="margin">
        <h2 className="section-heading">Our gyms</h2>
        <h4 className="section-desc">
          Each gym offers a premium fitness experience, a welcoming atmosphere and a dedicated team.
        </h4>
      </div>
      <LocationsCarousel gymLocations={gymLocations} />
      <Button modifiers={["btn ghost"]}>Book a tour</Button>
    </div>
  );
};

export default GymLocations;
