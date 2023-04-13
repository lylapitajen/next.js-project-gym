import { nanoid } from "nanoid";
import "./../styles/_main.scss";

const IconList = ({ array, Icon }) => {
  return (
    <ul>
      {array.map((item) => {
        return (
          <li key={nanoid()}>
            <Icon />
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default IconList;
