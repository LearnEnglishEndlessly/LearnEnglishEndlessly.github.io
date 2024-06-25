import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container grid mx-auto text-center h-screen">
      <div className="m-auto w-1/2">
        <span className="text-6xl">😔</span>
        <h1 className="text-5xl font-bold mt-10">Ooups, page not found</h1>
        <p className="text-basefont mt-5 mb-14">{`We are very sorry for the inconvenience. It looks like you're typing to access a page that has been deleted or never even existed.`}</p>
        <Link to="/" className="uppercase bg-redlee text-white py-4 px-8 font-medium rounded">
          back to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
