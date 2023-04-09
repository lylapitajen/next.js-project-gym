import Link from "next/link";

const Button = ({ href, modifiers, children }) => {
  const defaultClass = "btn";
  return href ? (
    <Link className={[defaultClass, ...modifiers].join(" ")} href={href}>
      {children}
    </Link>
  ) : (
    <button className={[defaultClass, ...modifiers].join(" ")}>
      {children}
    </button>
  );
};

export default Button;
