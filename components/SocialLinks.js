import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const iconStyles = { size: "2.3rem", color: "#8c66d2" };
const SocialLinks = () => {
  return (
    <ul className="social-links">
      <li>
        <FaInstagram {...iconStyles} />
      </li>
      <li>
        <FaTwitter {...iconStyles} />
      </li>
      <li>
        <FaYoutube {...iconStyles} />
      </li>
    </ul>
  );
};

export default SocialLinks;
