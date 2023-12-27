import React from "react";
import { useState } from "react";

function Contribute() {
  const [contribute, setcontribute] = useState({
    fname: "",
    email: "",
    subject: "",
    message: "",
  });

  let name, value;

  const submitcontribute = (event) => {
    name = event.target.name;
    value = event.target.value;

    setcontribute({ ...contribute, [name]: value });
  };

  const SubmitData = async (event) => {
    event.preventDefault();
    const { fname, email, subject, message } = contribute;
    const res = await fetch(
      "https://antika-9063f-default-rtdb.firebaseio.com/contributers.json",
      {
        method: "POST",
        Headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          email,
          subject,
          message,
        }),
      }
    );
    if (email && subject && message !== "") {
      if (res) {
        setcontribute({
          fname: "",
          email: "",
          subject: "",
          message: "",
        });
        //   alert("Data Stored");
      } else {
        alert("please fill the form");
      }
    } else {
      alert("please fill the form");
    }
  };
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Do you want to contribute with us?
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Just simple, Send us a query and we will contact you under 24 hours!
          </p>
          <form method="POST" className="space-y-8">
            <div>
              <label
                htmlFor="fname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fname"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Ali Ahmad"
                name="fname"
                value={contribute.name}
                onChange={submitcontribute}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@antika.com"
                name="email"
                value={contribute.email}
                onChange={submitcontribute}
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how you want to help us"
                name="subject"
                value={contribute.subject}
                onChange={submitcontribute}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Explain here clearly and tell us how you want to contribute with us!"
                name="message"
                value={contribute.message}
                onChange={submitcontribute}
              ></textarea>
            </div>
            <button type="submit" onClick={SubmitData}>
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contribute;
