// Dependencies
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

// FAQ data
import data from "../../api/faq.json";

// Images
import Logo from "/logo_lee.svg";
import Banner from "./assets/banner_img.png";
import About from "./assets/about_us.png";
import Navigation from "./components/Navigation";

// Components
import { MenuButton, CloseButton } from "./components/Icons";
import FAQ from "./components/Faq";
import Footer from "./components/Footer"

function App() {
  // Navbar hook
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Home Section */}
      <div className="container w-page_center mx-auto" id="home">
        {/* Navbar */}
        <div
          className="flex justify-between font-medium pt-4 items-center sticky top-0"
          id="navbar"
        >
          <NavLink to="#">
            <img
              src={Logo}
              alt="logo.svg"
              className="w-[70%] md:w-[80%] lg:w-full"
            />
          </NavLink>

          {/* Mobile Navbar */}
          <div className="hidden md:inline-block md:space-x-10 lg:space-x-20 text-lg">
            <Navigation />
          </div>
          <div className="md:hidden">
            <button className="cursor-pointer" onClick={toggleNavbar}>
              {isOpen ? <CloseButton /> : <MenuButton />}
            </button>
            {isOpen ? (
              <div className="absolute pt-[5vh] space-y-4 z-10 top-full left-0 right-0 flex flex-col text-center">
                <Navigation />
              </div>
            ) : null}
          </div>
          {/* End of Mobile Navbar */}
          
        </div>
        {/* End of Navbar */}

        {/* Banner */}
        <div className="grid grid-cols-12 justify-between py-14 gap-y-10">
          <div className="order-2 md:order-1 col-span-12 md:col-span-6 lg:col-span-8 my-auto">
            <h1 className="text-banner leading-none font-bold">
              Get Started. <br />
              Learn English Endlessly.
            </h1>
            <p className="text-basefont font-light my-6">
              We are dedicated to design this courses special for you
              independent learners.
            </p>
            <Link to="/sources">
              <button className="w-full md:w-fit py-3 px-6 uppercase bg-redlee text-white font-semibold text-basefont rounded">
                learn now
              </button>
            </Link>
          </div>
          <div className="order-1 md:order-2 col-span-12 md:col-span-6 lg:col-span-4">
            <img
              src={Banner}
              alt="banner.svg"
              className="bg-[#d9d9d9] m-auto rounded-full shadow-baseShadow"
            />
          </div>
        </div>
        {/* End of Banner */}
      </div>
      {/* End of Home Section */}

      {/* About Section */}
      <div className="container w-page_center mx-auto" id="about">
        <div className="grid grid-cols-12 justify-between py-14 gap-y-10">
          <div className="col-span-12 md:col-span-6">
            <img src={About} alt="about.png" />
          </div>
          <div className="md:col-span-1"></div>
          <div className="col-span-12 md:col-span-5 my-auto space-y-5">
            <h2 className="text-header font-bold">About Us</h2>
            <p className="text-basefont font-light">
              {`The story started when COVID-19 lockdown. CJ launched an English
              learning community called LEE and also became a volunteer teacher.
              She made an "exclusive" learning approach, gaining members'
              confidence in speaking English.`}
            </p>
          </div>
        </div>
      </div>
      {/* End of About Section */}

      {/* FAQ Section */}
      <div className="container w-page_center mx-auto" id="faq">
        <div className="grid grid-cols-12 py-14">
          <div className="col-span-1"></div>

          <div className="col-span-12 md:col-span-10">
            <h2 className="text-header font-bold text-center">FAQs</h2>
            <div className="mt-5">
              {data.map((faqdata) => (
                <FAQ
                  key={faqdata._id}
                  question={faqdata.question}
                  answer={faqdata.answer}
                />
              ))}
            </div>
          </div>

          <div className="col-span-1"></div>
        </div>
      </div>
      {/* End of FAQ Section */}

      {/* Footer Section */}
      <Footer />
      {/* End of Footer Section */}
    </>
  );
}

export default App;
