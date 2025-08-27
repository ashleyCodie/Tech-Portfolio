import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const EmailModal = ({ setShowModal }) => {
  const form = useRef();
  const [emailForm, setEmailForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phoneNumber: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a688axl",
        "template_zouuk1b",
        e.target,
        "M2msgr1ykfUWofbhq"
      )
      .then(() => {
        alert("Email sent!");
        setEmailForm({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          phoneNumber: "",
          message: "",
        });
        setShowModal(false);
      })
      .catch((error) => console.error("Email error:", error));
  };

  return (
    <div>
      <div
        id="crud-modal"
        tabindex="-1"
        aria-hidden="true"
        className="fixed overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-purple-300 border border-black rounded-lg shadow-sm dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-3xl font-semibold text-black dark:text-white">
                Email Me
              </h3>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <form onSubmit={sendEmail} ref={form} className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    for="firstName"
                    className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    value={emailForm.firstName}
                    onChange={(e) =>
                      setEmailForm({
                        ...emailForm,
                        firstName: e.target.value,
                      })
                    }
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Jane"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    for="lastName"
                    className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    value={emailForm.lastName}
                    onChange={(e) =>
                      setEmailForm({
                        ...emailForm,
                        lastName: e.target.value,
                      })
                    }
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Doe"
                    required=""
                  />
                </div>
                <div className="col-span-2">
                  <label
                    for="email"
                    className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    value={emailForm.email}
                    onChange={(e) =>
                      setEmailForm({
                        ...emailForm,
                        email: e.target.value,
                      })
                    }
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="jane@email.com"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    for="price"
                    className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
                  >
                    Company
                  </label>
                  <input
                    value={emailForm.company}
                    onChange={(e) =>
                      setEmailForm({
                        ...emailForm,
                        company: e.target.value,
                      })
                    }
                    type="text"
                    name="company"
                    id="company"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Company"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    for="company"
                    className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
                  >
                    Contact Number
                  </label>
                  <input
                    value={emailForm.phoneNumber}
                    onChange={(e) =>
                      setEmailForm({
                        ...emailForm,
                        phoneNumber: e.target.value,
                      })
                    }
                    id="phoneNumber"
                    type="tel"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="480-888-1111"
                    required=""
                  />
                </div>
                <div className="col-span-2">
                  <label
                    for="message"
                    className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    value={emailForm.message}
                    onChange={(e) =>
                      setEmailForm({
                        ...emailForm,
                        message: e.target.value,
                      })
                    }
                    id="message"
                    type="text"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write message here..."
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="text-black border border-black bg-gradient-to-r from-purple-300 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-extrabold rounded-lg text-3xl leading-none px-4 py-2 me-2 flex items-center justify-center hover:underline"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
