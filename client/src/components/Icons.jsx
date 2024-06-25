// Icons
import Menu from "../assets/icons/menu.svg";
import Close from "../assets/icons/close.svg";
import Back from "../assets/icons/back.svg";
import Minus from "../assets/icons/minus.svg";
import Plus from "../assets/icons/plus.svg";
import Search from "../assets/icons/search.svg";
import Down from "../assets/icons/down.svg";

export const MenuButton = () => {
  return (
    <>
      <img src={Menu} alt="menu.svg" className="w-8 h-8" />
    </>
  );
};

export const CloseButton = () => {
  return (
    <>
      <img src={Close} alt="close.svg" className="w-8 h-8" />
    </>
  );
};

export const BackButton = () => {
  return (
    <>
      <img src={Back} alt="back.svg" className="w-6 h-6" />
    </>
  );
};

export const MinusButton = () => {
  return (
    <>
      <img src={Minus} alt="minus.svg" className="w-8 h-8" />
    </>
  );
};

export const PlusButton = () => {
  return (
    <>
      <img src={Plus} alt="plus.svg" className="w-8 h-8" />
    </>
  );
};

export const SearchButton = () => {
  return (
    <>
      <img src={Search} alt="search.svg" className="w-8 h-8" />
    </>
  );
};

export const DownButton = () => {
  return (
    <>
      <img src={Down} alt="down.svg" className="w-8 h-8" />
    </>
  );
};