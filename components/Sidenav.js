"use client";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/layoutData";
import { useState, useEffect } from "react";
import SocialLinks from "./SocialLinks";

const Sidenav = ({ active }) => {
  const [extraClass, setExtraClass] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    const overlay = document.getElementById("overlay");
    const navbarLogo = document.getElementById("navbar-logo");
    if (active === true) {
      setShow(true);
      setTimeout(() => {
        overlay.classList.add("active");
        setExtraClass("animate-in");
        navbarLogo.classList.add("hidden");
      }, 300);
    } else if (active === false) {
      navbarLogo.classList.remove("hidden");
      overlay.classList.remove("active");
      setExtraClass("");
      setTimeout(() => {
        setShow(false);
      }, 300);
    }
  }, [active]);

  if (!show) return null;

  return (
    <div className={`sidenav-container ${extraClass}`}>
      <Image
        src="/logoipsum-290.svg"
        height={70}
        width={70}
        alt="Elite Fitness logo"
      />
      <ul className="sidenav-links">
        {navLinks.map((link) => {
          const { id, text, href } = link;
          return (
            <li key={id}>
              <Link href={href}>{text}</Link>
            </li>
          );
        })}
      </ul>
      <div className="socials">
        <h2 className="subheading">Follow us</h2>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Sidenav;
