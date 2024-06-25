import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#faq">FAQ</a>
      <NavLink to="" className="py-2 px-4 rounded text-white bg-redlee">
        Discord
      </NavLink>
    </>
  );
};

export default Navigation;
