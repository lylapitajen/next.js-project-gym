import Link from "next/link";
import Image from "next/image";
import { navLinks } from "../data/layoutData";
import "./../styles/_main.scss";
import Button from "./Button";
import Hamburger from "./Hamburger";
const Navbar = () => {
  return (
    <nav className="margin nav-container">
      <Image
        id="navbar-logo"
        src="/logoipsum-290.svg"
        height={70}
        width={70}
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
      <Hamburger />
    </nav>
  );
};

export default Navbar;
