import { async } from "@firebase/util";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, users } = UserAuth();
  const navigate = useNavigate();

  const handlesignup = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password);
      navigate("/");
      //   console.log(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen ">
        <img
          className="hidden sm:block absolute w-full h-full object-cover "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c2578c37-8569-4f88-b8f1-67a26a9ddcdd/f2740ff3-b308-4314-949b-ceec461ea44d/PK-en-20220725-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/70 fixed top-0 left-0 w-full h-full "></div>
        <div className="fixed w-full px-4 py-20 z-50 ">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/70 text-white ">
            <div className="max-w-[320px] mx-auto py-20">
              <h1 className="text-3xl font-bold ">Sign Up</h1>

              <form
                onSubmit={handlesignup}
                className="w-full flex flex-col py-4 "
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-4 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-4 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                />
                <button
                  type="submit"
                  className="bg-red-600 p-3 my-8 rounded  font-bold"
                >
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600 ">
                  <p>
                    <input type="checkbox" className="mr-3" />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="py-8">
                  <span className=" text-gray-600  ">
                    Already subscribe to Netflix?
                  </span>
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
