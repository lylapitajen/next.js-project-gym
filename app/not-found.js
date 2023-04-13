import { TbBarbell } from "react-icons/tb";
import Button from "@/components/Button";
import "./../styles/_main.scss";

const NotFound = () => {
  return (
    <main className="error-page margin">
      <TbBarbell size="10rem" color="#b066d1" strokeWidth="1" />
      <h1>
        40<span>4</span>
      </h1>
      <h2>Oops! Page not found.</h2>
      <Button href="/" modifiers={["ghost"]}>
        Back to Home
      </Button>
    </main>
  );
};

export default NotFound;
