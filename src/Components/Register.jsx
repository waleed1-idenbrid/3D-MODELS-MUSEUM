import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";
export default function Register() {
  let showMsg = ["text-red-300"];
  const [updateForm, setUpdateForm] = useState({
    email: "",
    password: "",
    cpassword: "",
    message: "",
    style: "",
    type: "0",
  });

  let name, value;
  const formHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUpdateForm({ ...updateForm, [name]: value });
  };

  const formRegistrationHandler = async (e) => {
    e.preventDefault(e);
    let email = e.target.email.value;
    let password = e.target.password.value;
    let cpassword = e.target.cpassword.value;

    if (password !== cpassword) {
      setUpdateForm({
        message: "Password does not match",
        style: "text-red-800",
      });
      return;
    }
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        sendEmailVerification(user);

        setUpdateForm({
          email: "",
          password: "",
          cpassword: "",
          message:
            "Registered Successfully! \n please check your inbox to verify email",
          style: "text-green-700",
        });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        setUpdateForm({ message: error.message, style: "text-yellow-500" });
      });
  };
  return (
    <>
      <section className="bg-white  dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Create a New Account
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Enter your credentials to Create a New Account
          </p>
          <p
            className={`${updateForm.style} font-bold text-center text-red-500 dark:text-gray-400 sm:text-xl`}
          >
            {updateForm.message}
          </p>
          <form onSubmit={formRegistrationHandler} className="space-y-8">
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
                value={updateForm.email}
                onChange={formHandler}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter Password"
                name="password"
                value={updateForm.password}
                onChange={formHandler}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="cpassword"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Confirm Password"
                name="cpassword"
                value={updateForm.cpassword}
                onChange={formHandler}
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="text-center duration-500 transition-all hover:bg-purple-400 bg-purple-700 p-2 text-white rounded-lg min-w-[20vw]"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-sm my-3 duration-300 transition-all hover:text-purple-200  text-center text-purple-700">
            <Link to="/login">Already have an account ?</Link>
          </p>
        </div>
      </section>
    </>
  );
}
