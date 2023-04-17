"use client";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import Sidenav from "./Sidenav";
const Hamburger = () => {
  const [sidenavActive, setSidenavActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const burgerRef = useRef(null);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div
        className="burger-menu"
        onClick={() => setSidenavActive(!sidenavActive)}
      >
        <input ref={burgerRef} className="hamburger-trigger" type="checkbox" />
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      {mounted &&
        createPortal(
          <Sidenav
            burger={burgerRef}
            active={sidenavActive}
            setSidenavActive={setSidenavActive}
          />,
          document.getElementById("overlay")
        )}
    </>
  );
};

export default Hamburger;
