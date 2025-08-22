import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full text-white text-center font-extrabold py-4">
      <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-2xl text-black sm:text-center dark:text-black">
            © 2025{" "}
            <a href="/" className="hover:underline">
              AshleyCodie
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-black sm:mt-0">
            <li>
              <a href="#" className="hover:text-blue-700 me-4 md:me-6 text-black text-2xl">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700 text-black text-2xl">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
