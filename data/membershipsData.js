import { nanoid } from "nanoid";

export const memberships = [
  {
    id: nanoid(),
    type: "Annual",
    price: "£250",
    text: ["Save 20% off", "Access to all classes", "Access to all gym"],
  },
  {
    id: nanoid(),
    type: "Monthly",
    price: "£30",
    span: "/per month",
    text: ["£10 joining fee", "Access to all classes"],
  },
  {
    id: nanoid(),
    type: "Day Pass",
    price: "£10",
    text: ["Bring a friend for £5"],
  },
];
