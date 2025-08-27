import { Link, useNavigate, useLocation } from "react-router";


const Card = ({ title, description, github, techUsed, link, image }) => {
  return (
    <div className="">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col">
        <Link to="#">
          <img
            className="rounded-t-lg p-2"
            src={image}
            alt=""
          />
        </Link>
        <div className="p-5 flex flex-col flex-grow">
          <Link href="#">
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          <p className="mb-3 text-2xl font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <p className="mb-3 text-2xl font-normal text-gray-700 dark:text-gray-400">
            <span className="font-extrabold">Tech/Libraries Used:</span>{techUsed}
          </p>
          <p className="mb-3 text-2xl font-normal text-gray-700 dark:text-gray-400">
            <span className="font-extrabold">GitHub:</span> <Link to={github} className="text-blue-600 underline text-xl">{github}</Link>
          </p>
          
          {/* This div will push the button to the bottom */}
          <div className="mt-auto">
            <button className="">
              <Link
                to={link}
                className="text-black border border-black bg-gradient-to-r from-purple-300 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-extrabold rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 hover:underline"
              >
                View Project
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
