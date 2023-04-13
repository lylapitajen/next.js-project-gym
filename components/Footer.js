import FooterLinks from "./FooterLinks";
import Image from "next/image";
import { footerLinks } from "./../data/layoutData";
import { gymLocations } from "@/data/gymLocationsData";
import "./../styles/_main.scss";
import SocialLinks from "./SocialLinks";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container margin">
        <div className="footer-section">
          <Image
            src="/logoipsum-290.svg"
            height={50}
            width={50}
            alt="Elite Fitness logo"
          />
          <h2>Elite Fitness Gyms</h2>
          <p>info@elitefitness.co.uk</p>
          <p>01832544886</p>
          <SocialLinks size="2rem" color="#b066d1" />
        </div>
        <div className="footer-section">
          <h2>Opening times</h2>
          <p>Monday-Sunday</p>
          <p>05:00-00:00</p>
        </div>
        <FooterLinks links={footerLinks} subheading="Links" />
        <FooterLinks links={gymLocations} subheading="Gyms" />
      </div>

      <p className="margin">© Elite Fitness Gyms - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
