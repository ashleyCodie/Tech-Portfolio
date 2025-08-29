import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../components/Button";
import GradientText from "../components/GradientText";

const ContactMe = () => {
  const form = useRef();
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
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
        alert("Message sent!");
        setContactForm({firstName: "", lastName: "", company: "", email: "", phoneNumber: "", message: ""})
      })
      .catch((error) => console.error("Email error:", error));
  };

  return (
    <div>
      <div className="isolate bg-purple-300 px-6 py-24 sm:py-18 lg:px-8">
        {/* <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
    <div  className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"></div>
  </div> */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-7xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                         <GradientText
                          colors={["#020617", "#d8b4fe", "#9333ea", "#6d28d9", "#020617"]}
                          animationSpeed={3}
                          showBorder={false}
                          className="custom-class text-center mt-10 text-7xl font-extrabold text-center"
                        >
                          Contact Me
                        </GradientText>
          </h2>
          {/* <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p> */}
        </div>
        <form
          onSubmit={sendEmail}
          ref={form}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-2xl font-semibold text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2.5">
                <input
                  value={contactForm.firstName}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      firstName: e.target.value,
                    })
                  }
                  id="firstName"
                  type="text"
                  name="firstName"
                  autoComplete="firstName"
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-2xl font-semibold text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2.5">
                <input
                  value={contactForm.lastName}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      lastName: e.target.value,
                    })
                  }
                  id="lastName"
                  type="text"
                  name="lastName"
                  autoComplete="lastName"
                   required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-2xl font-semibold text-gray-900"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  value={contactForm.company}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      company: e.target.value,
                    })
                  }
                  id="company"
                  type="text"
                  name="company"
                  autoComplete="organization"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-2xl font-semibold text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      email: e.target.value,
                    })
                  }
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                   required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phoneNumber"
                className="block text-2xl font-semibold text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                  <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      aria-label="Country"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      data-slot="icon"
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    >
                      <path
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    value={contactForm.phoneNumber}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        phoneNumber: e.target.value,
                      })
                    }
                    id="phoneNumber"
                    type="text"
                    name="phoneNumber"
                    placeholder="123-456-7890"
                     required
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-2xl font-semibold text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      message: e.target.value,
                    })
                  }
                  id="message"
                  name="message"
                  rows="4"
                   required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Button text="Let's Collaborate!" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
