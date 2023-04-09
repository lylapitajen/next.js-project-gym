import { nanoid } from "nanoid";

export const navLinks = [
  {
    id: nanoid(),
    text: "Home",
    href: "/home",
  },
  {
    id: nanoid(),
    text: "Memberships",
    href: "/memberships",
  },
  {
    id: nanoid(),
    text: "About",
    href: "/about",
  },
  {
    id: nanoid(),
    text: "Contact Us",
    href: "/contact",
    fill: true,
  },
];
