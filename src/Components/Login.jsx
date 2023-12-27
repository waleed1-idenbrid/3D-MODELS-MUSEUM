import React from "react";
import { Link, Navigate, redirect } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [authCheck, setAuthCheck] = useState(false);
  const [updateForm, setUpdateForm] = useState({
    email: "",
    password: "",
    message: "",
    style: "",
  });
  let loggedInCheck = sessionStorage.getItem("response");

  let name, value;
  const formHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUpdateForm({ ...updateForm, [name]: value });
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then((success) => {
        // Signed in

        if (success.user.emailVerified === true) {
          console.log(success);
          setUpdateForm({ message: "success", style: "text-green-500" });
          sessionStorage.setItem("response", "true");
          setAuthCheck(true);
        } else {
          console.log(success.user);
          setUpdateForm({
            message: "Email is not verified",
            style: "text-red-500",
          });
        }

        // ...
      })
      .catch((error) => {
        console.log(error);
        setUpdateForm({
          message: "Please check your email or Password",
          style: "text-red-500",
        });
      });
  };
  return loggedInCheck ? (
    (window.location.replace("/Dashboard"), setAuthCheck(true))
  ) : (
    <>
      <section className="bg-white  dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Login
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Enter your credentials to login to Dashboard
          </p>
          <p className={`${updateForm.style} text-center capitalize font-bold`}>
            {updateForm.message}
          </p>
          <form onSubmit={loginHandler} className="space-y-8">
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
            <div className="flex items-center justify-center">
              <button
                className="text-center duration-500 transition-all hover:bg-purple-400 bg-purple-700 p-2 text-white rounded-lg min-w-[20vw]"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-sm my-3 duration-300 transition-all hover:text-purple-200  text-center text-purple-700">
            <Link to="/Register">Create a New Account</Link>
          </p>
        </div>
      </section>
    </>
  );
}
