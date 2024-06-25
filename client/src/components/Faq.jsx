import { useState } from "react";
import Plus from "../assets/icons/plus.svg"
import Minus from "../assets/icons/minus.svg"

const Faq = ({question, answer}) => {
  const [openFAQ, setOpenFAQ] = useState(false);

  return (
    <div className="container border-[9D9D9D] border-t-2 p-3 md:p-5">
      <button
        onClick={() => setOpenFAQ(!openFAQ)}
        className="flex justify-between w-full gap-x-8 items-center text-left"
      >
        <h2 className="text-basefont font-medium">{question}</h2>
        {openFAQ ? (
          <img src={Minus} alt="minus.svg" className="w-8" />
        ) : (
          <img src={Plus} alt="plus.svg" className="w-8" />
        )}
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          openFAQ ? "grid-rows-[1fr] opacity-100 py-5" : "grid-rows-[0fr] opacity-0 py-0"
        }`}
      >
        <p className="overflow-hidden text-basefont font-light">{answer}</p>
      </div>
    </div>
  );
};

export default Faq;
