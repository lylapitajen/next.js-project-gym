import Link from "next/link";
import { nanoid } from "nanoid";
const FooterLinks = ({ links, subheading }) => {
  return (
    <div className="footer-section">
      <h2>{subheading}</h2>
      <ul className="footer-links">
        {links.map((link) => {
          return (
            <li key={nanoid()}>
              <Link href={link.href || link.slug}>{link.text || link.city}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinks;
