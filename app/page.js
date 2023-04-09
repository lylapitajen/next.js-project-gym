import GymClasses from "@/components/GymClasses";
import GymLocations from "@/components/GymLocations";
import HeroSection from "@/components/HeroSection";
import Memberships from "@/components/Memberships";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Memberships />
      <GymClasses />
      <GymLocations />
    </main>
  );
}
