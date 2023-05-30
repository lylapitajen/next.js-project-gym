import GymClasses from "@/components/GymClasses";
import GymLocations from "@/components/GymLocations";
import HeroSection from "@/components/HeroSection";
import Memberships from "@/components/Memberships";
import { getMemberships } from "@/lib/api/memberships";
import { getGymClasses } from "@/lib/api/gymClasses";
import { getGymLocations } from "@/lib/api/gymLocations";
export default async function Home() {
  const memberships = await getMemberships();
  const gymClasses = await getGymClasses();
  const gymLocations = await getGymLocations();
  console.log("locations", gymLocations);
  return (
    <main>
      <HeroSection />
      <h2 className="section-heading margin">Memberships</h2>
      <Memberships memberships={memberships} readMore={true} />
      <GymClasses gymClasses={gymClasses} />
      <GymLocations gymLocations={gymLocations} />
    </main>
  );
}
