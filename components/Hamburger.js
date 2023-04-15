"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Sidenav from "./Sidenav";
const Hamburger = () => {
  const [sidenavActive, setSidenavActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className="burger-menu"
      onClick={() => setSidenavActive(!sidenavActive)}
    >
      <input className="hamburger-trigger" type="checkbox" />{" "}
      <span className="bar"></span>
      <span className="bar"></span>
      {mounted &&
        createPortal(
          <Sidenav active={sidenavActive} />,
          document.getElementById("overlay")
        )}
    </div>
  );
};

export default Hamburger;
