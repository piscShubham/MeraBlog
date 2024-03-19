import React, { useState } from "react";
import group from "../Assests/group.svg";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginuser } from "../../Features/Authenticate";

function Login() {
  const [email, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  async function handleSubmit() {
    dispatch(loginuser({ email, password }));
    Navigate("/");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center md:px-10">
        <div className="flex bg-white rounded-2xl shadow-2xl md:py-20  md:w-3/5">
          <div className="hidden lg-block md:block  md:w-2/5 h-auto rounded-br-2xl ml-16">
            <div className=" mb-10">
              <div className="flex font-inter h-6 mb-2 ml-3">
                <h1 className="font-inter">
                  Welcome to,<span className="flex">MY BLOG</span>
                </h1>
              </div>
              <div className=" mt-8" style={{ color: "#777777" }}>
                <p className=" text-sm font-inter text-gray-400 flex ml-3">
                  Sign up for best culture{" "}
                </p>
                <p className=" text-sm font-inter text-gray-400 flex ml-3">
                  Program!
                  <span className="text-green-500 px-8 h-1 bg-green-300 mt-3 ml-2 rounded-2xl"></span>
                </p>
              </div>
            </div>
            <div>
              <img src={group} />
            </div>
          </div>

          <div className="w-3/5 h-4/5 text-white rounded-tr-2xl md:ml-16 rounded-br-2xl ">
            <h1 className=" font-inter text: #666666 text-black text-xl text-left ml-5 mb-6 md:mb-2 ">
              Sign In
            </h1>
            <div className="px-3 py-2 flex-row-reverse">
              <label className="flex lg:ml-2" style={{ color: "#848080" }}>
                Enter Email
              </label>
              <input
                type="email"
                className="h-58 px-2 lg:mr-20 lg:w-3/4 py-2 rounded-md border text-black border-gray-300"
                placeholder=" Enter your email address "
                name="emailAddress"
                value={email}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>
            <div className="px-3 flex-row-reverse">
              <label className="flex lg:ml-2" style={{ color: "#848080" }}>
                Enter Password
              </label>
              <input
                type="password"
                className="h-58 px-2 lg:mr-20 lg:w-3/4 py-2 rounded-md border text-black border-gray-300"
                placeholder=" Please enter password "
                name="emailAddress"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="py-3 sm:w-3/4 lg:ml-3 mt-4 bg-green-500 rounded-2xl ml-9  ">
              <button onClick={handleSubmit}>Login</button>
            </div>
            <div className=" py-5">
              <p
                className="sm:text-xs sm:ml-7  md:mr-20 lg:text-sm"
                style={{ color: "#767575" }}
              >
                Do not have an account?
                <Link to={"/signup"} className=" text-blue-800">
                  SignUp
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Login;
