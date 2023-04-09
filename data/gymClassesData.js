import { nanoid } from "nanoid";
import yogaImg from "public/yoga-class.jpg";
import strengthImg from "public/strength-class.jpg";
import hiitImg from "public/hiit-class.jpg";
import coreImg from "public/core-class.jpg";

export const gymClasses = [
  {
    id: nanoid(),
    type: "Yoga",
    text: "Lorem ipsum dolor sit amet. Quo autem similique et recusandae nostrum est minima impedit.",
    image: yogaImg,
  },
  {
    id: nanoid(),
    type: "Strength Training",
    text: "Lorem ipsum dolor sit amet. Quo autem similique et recusandae nostrum est minima impedit.",
    image: strengthImg,
  },
  {
    id: nanoid(),
    type: "Hiit",
    text: "Lorem ipsum dolor sit amet. Quo autem similique et recusandae nostrum est minima impedit.",
    image: hiitImg,
  },
  {
    id: nanoid(),
    type: "Core",
    text: "Lorem ipsum dolor sit amet. Quo autem similique et recusandae nostrum est minima impedit.",
    image: coreImg,
  },
];
