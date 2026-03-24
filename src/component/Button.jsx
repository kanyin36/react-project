import { useContext } from "react";
import { Link } from "react-router-dom";
import { ButtonContext } from "../pages/Home";

const Button = () => {
    const text = useContext(ButtonContext)

  return (
    <Link
      className="text-red-700 text-sm font-bold"
      target="_blank"
      to={"https://google.com"}
    >
        {text}
    </Link>
  );
};

export default Button;
