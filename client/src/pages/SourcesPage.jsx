// List data
import data from "../../../api/data.json";

// Components
import { BackButton } from "../components/Icons";
import Search from "../assets/icons/search.svg";
import Footer from "../components/Footer";

// Dependencies
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const SourcesPage = () => {
  // Filter
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    aspect: "",
    level: "",
    topic: "",
  });

  useEffect(() => {
    setFilteredData(data);
  }, []);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Search
  const [findItems, setFindItems] = useState("");

  const handleSearchChange = (event) => {
    setFindItems(event.target.value);
  };

  // Reset
  const handleReset = () => {
    setFilters({
      aspect: "",
      level: "",
      topic: "",
    });
    setFindItems("");
    setFilteredData(data);
  };

  useEffect(() => {
    let filteredResult = data.filter((item) => {
      return (
        (filters.aspect === "" || item.aspect === filters.aspect) &&
        (filters.level === "" || item.level === filters.level) &&
        (filters.topic === "" || item.topic === filters.topic) &&
        (findItems === "" ||
          item.site.toLowerCase().includes(findItems.toLowerCase()))
      );
    });
    setFilteredData(filteredResult);
  }, [filters, findItems]);

  return (
    <>
      <div className="container w-page_center mx-auto py-8" id="sources">
        <Link
          to="/"
          className="flex items-center text-basefont gap-x-2 text-[#ABAFB5] w-fit"
        >
          <BackButton /> Back
        </Link>

        <form className="col-span-12 flex py-5">
          <input
            type="text"
            className="w-full border pl-8 text-basefont font-extralight bg-white rounded-l-md outline-none shadow-lg"
            placeholder="search site..."
            value={findItems}
            onChange={handleSearchChange}
          />
          <button
            type="submit"
            className="bg-redlee py-4 px-7 rounded-r-md shadow-lg"
          >
            <img
              src={Search}
              alt="search.svg"
              className="w-8 m-auto bg-transparent"
            />
          </button>
        </form>

        <div className="flex items-end gap-2 md:gap-10 pb-8">
          <div className="w-[31%]">
            <label className="text-basefont font-semibold">Aspect</label>
            <select
              className="bg-white py-3 w-full mt-4 cursor-pointer shadow-md outline-none"
              id=""
              name="aspect"
              value={filters.aspect}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="listening">Listening</option>
              <option value="speaking">Speaking</option>
              <option value="reading">Reading</option>
              <option value="writing">Writing</option>
            </select>
          </div>
          <div className="w-[31%]">
            <label className="text-basefont font-semibold">Level</label>
            <select
              className="bg-white py-3 w-full mt-4 cursor-pointer shadow-md outline-none"
              id=""
              name="level"
              value={filters.level}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="A1">{`(A1) Beginners`}</option>
              <option value="A2">{`(A2) Pre-Intermediate`}</option>
              <option value="B1">{`(B1) Intermediate`}</option>
              <option value="B2">{`(B2) Upper-Intermediate`}</option>
              <option value="C1">{`(C1) Advanced`}</option>
              <option value="C2">{`(C2) Proficiency`}</option>
            </select>
          </div>
          <div className="w-[31%]">
            <label className="text-basefont font-semibold">Topic</label>
            <select
              className="bg-white py-3 w-full mt-4 cursor-pointer shadow-md outline-none"
              id=""
              name="topic"
              value={filters.topic}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
            </select>
          </div>
          <div className="w-[7%] mb-2">
            <span
              className="text-basefont text-[#ABAFB5] cursor-pointer"
              onClick={handleReset}
            >
              Clear
            </span>
          </div>
        </div>

        {/* PC or Tablet View */}
        <div className="relative overflow-x-auto w-full max-h-[50vh] hidden md:inline-block">
          <table className="w-full text-left rtl:text-right text-base">
            <thead className="text-[#ABAFB5] sticky top-0 z-10">
              <tr>
                <th scope="col" className="px-6 py-1 font-medium bg-white">
                  Site
                </th>
                <th scope="col" className="px-6 py-1 font-medium bg-white">
                  Aspect
                </th>
                <th scope="col" className="px-6 py-1 font-medium bg-white">
                  Level
                </th>
                <th scope="col" className="px-6 py-1 font-medium bg-white">
                  Topic
                </th>
                <th scope="col" className="px-6 py-1 font-medium bg-white"></th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr
                  className="border-t border-[#9D9D9D] text-base"
                  key={item.id}
                >
                  <td
                    scope="row"
                    className="px-6 py-4 whitespace-nowrap bg-white"
                  >
                    {item.site}
                  </td>
                  <td className="px-6 py-4 bg-white">{item.aspect}</td>
                  <td className="px-6 py-4 bg-white">
                    <span
                      className={
                        "rounded-sm py-0 px-2 text-white " +
                        (item.level.slice(0, 1) === "A"
                          ? "bg-beginner"
                          : item.level.slice(0, 1) === "B"
                          ? "bg-intermediate"
                          : item.level.slice(0, 1) === "C"
                          ? "bg-advanced"
                          : null)
                      }
                    >
                      {item.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 bg-white">{item.topic}</td>
                  <td className="py-4 bg-white">
                    <Link
                      to={item.link}
                      className="bg-redlee px-5 py-1 text-white rounded"
                    >
                      Learn
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="relative overflow-x-auto w-full max-h-[50vh] md:hidden">
          {filteredData.map((item) => (
            <div className="p-4 bg-white border-t border-[rgb(157,157,157)]">
              <div className="flex justify-between items-center bg-white gap-x-4">
                <div className="space-y-1 bg-white">
                  <h1 className="bg-white">{item.topic}</h1>
                  <div className="space-x-1 bg-white">
                    <span
                      className={
                        "rounded-sm py-0 px-2 text-white " +
                        (item.level.slice(0, 1) === "A"
                          ? "bg-beginner"
                          : item.level.slice(0, 1) === "B"
                          ? "bg-intermediate"
                          : item.level.slice(0, 1) === "C"
                          ? "bg-advanced"
                          : null)
                      }
                    >
                      {item.level}
                    </span>
                    <span className="rounded-sm py-0 px-2 text-white bg-redlee">
                      {item.aspect}
                    </span>
                  </div>
                  <h1 className="bg-white">{item.site}</h1>
                </div>
                <div className="py-4 bg-white">
                  <Link
                    to={item.link}
                    className="bg-redlee px-5 py-1 text-white rounded"
                  >
                    Learn
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SourcesPage;
