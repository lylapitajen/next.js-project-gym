import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const iconStyles = { size: "2rem", color: "#b066d1" };
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
