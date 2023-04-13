import { nanoid } from "nanoid";

export const memberships = [
  {
    id: nanoid(),
    type: "Day Pass",
    price: "£10",
    text: ["Bring a friend for £5"],
  },
  {
    id: nanoid(),
    type: "Monthly",
    price: "£30",
    span: "/per month",
    text: [
      "No contract, cancel anytime",
      "£10 joining fee",
      "Access to all classes",
    ],
  },
  {
    id: nanoid(),
    type: "Annual",
    price: "£240",
    text: [
      "Access to all classes",
      "Access to all gyms",
      "1 weekly PT session",
    ],
    banner: "Save 20%",
  },
];
