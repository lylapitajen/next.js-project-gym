import Memberships from "@/components/Memberships";
import { getMemberships } from "@/lib/api/memberships";
export const metadata = {
  title: "Memberships",
  description: "Become a member at Elite Fitness today and enjoy exclusive benefits",
};

export default async function MembershipsPage() {
  const memberships = await getMemberships();
  return (
    <main className="memberships-page">
      <h1 className="margin page-title">Memberships</h1>
      <Memberships memberships={memberships} />
      <div className="memberships-text margin">
        <p>
          At our gyms, we believe that fitness should be accessible to everyone. That's why we offer a range of
          membership options to suit every budget and fitness level.
        </p>
        <p>
          Our memberships come with a range of exclusive benefits, including access to state-of-the-art equipment,
          personalized training plans, and expert guidance from our experienced trainers. We also offer a range of group
          fitness classes, including yoga, spinning, and HIIT.
        </p>
      </div>
    </main>
  );
}
