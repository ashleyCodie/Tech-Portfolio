import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="left-0 w-full text-white text-center font-extrabold py-4">
      <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-2xl text-black sm:text-center dark:text-black">
            © 2025{" "}
            <a href="/" className="hover:underline hover:text-purple-500">
              AshleyCodie
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-black sm:mt-0">
            <li>
              <Link to="/AboutMe" className="hover:text-purple-500 me-4 md:me-6 text-black text-2xl">
                About
              </Link>
            </li>
            <li>
              <Link to="/ContactMe" className="hover:text-purple-500 text-black text-2xl">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
