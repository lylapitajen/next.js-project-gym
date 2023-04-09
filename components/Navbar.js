import Link from "next/link";
import Image from "next/image";
import { navLinks } from "../data/layoutData";
import "./../styles/_main.scss";
import Button from "./Button";
const Navbar = () => {
  return (
    <nav className="margin nav-container">
      <Image
        src="/logoipsum-290.svg"
        height={50}
        width={50}
        alt="Elite Fitness logo"
      />
      <ul className="nav-links">
        {navLinks.map((link) => {
          const { id, text, href, fill } = link;
          return (
            <li key={id}>
              {fill ? (
                <Button href={href} modifiers={["ghost"]}>
                  {text}
                </Button>
              ) : (
                <Link href={href}>{text}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
