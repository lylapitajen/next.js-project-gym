"use client";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/layoutData";
import { useState, useEffect } from "react";
import SocialLinks from "./SocialLinks";

const Sidenav = ({ active, burger, setSidenavActive }) => {
  const [extraClass, setExtraClass] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const overlay = document.getElementById("overlay");
    const navbarLogo = document.getElementById("navbar-logo");
    if (active === true) {
      overlay.addEventListener("click", (e) => {
        if (!e.target.closest(".sidenav-container")) {
          setSidenavActive(false);
        }
      });
      setShow(true);
      setTimeout(() => {
        overlay.classList.add("active");
        setExtraClass("animate-in");
        navbarLogo.classList.add("hidden");
      }, 300);
    } else if (active === false) {
      navbarLogo.classList.remove("hidden");
      overlay.classList.remove("active");
      burger.current.checked = false;
      setExtraClass("");
      setTimeout(() => {
        setShow(false);
      }, 300);
    }
  }, [active]);

  if (!show) return null;

  return (
    <div className={`sidenav-container ${extraClass}`}>
      <div
        className="sidenav-links-container"
        onClick={() => setSidenavActive(false)}
      >
        <Image
          src="/logoipsum-290.svg"
          height={70}
          width={70}
          alt="Elite Fitness logo"
        />
        <ul className="sidenav-links">
          {navLinks.map((link, i) => {
            const { id, text, href } = link;
            return (
              <li
                className="sidenav-page-link"
                key={id}
                style={{ animationDelay: `${(i + 3) * 100}ms` }}
              >
                <Link href={href}>{text}</Link>
              </li>
            );
          })}
          <li className="socials">
            <h2 className="subheading">Follow us</h2>
            <SocialLinks />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
