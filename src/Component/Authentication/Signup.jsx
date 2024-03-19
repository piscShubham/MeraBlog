import React, { useState } from "react";
import apple from "../Assests/apple.svg";
import google_s from "../Assests/google_s.svg";
import group from "../Assests/group.svg";

import { useDispatch, useSelector } from "react-redux";
 import { SingupUser } from "../../Features/Authenticate";
import { useNavigate } from "react-router-dom";

function Signupp() {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const[confirmPassword,setConfirmPassword]=useState();
  const [passwordmath, setPasswordsMatch] = useState(true);
  const dispatch = useDispatch();
   const Navigate=useNavigate();
  
  // on Submit function
  async function handleSubmit() {
    dispatch(SingupUser({firstname, lastname, email, password }));
     Navigate('/');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center md:px-10">
        <div className="flex bg-white rounded-2xl shadow-2xl md:py-10 lg:py-15">
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

          <div className="w-3/5 h-4/5 text-white rounded-tr-2xl  xl: ml-16 rounded-br-2xl  md:mr-10 lg:mr-14">
            <h1 className=" font-inter text: #666666 text-black text-xl text-left ml-10 mb-6">
              Sign Up
            </h1>
            <div className="rounded-md flex py-1 lg:ml-7">
              <div className="ml-2  ">
                <p
                  className="text-gray-500 flex lg:ml-1"
                  style={{ color: "#848080" }}
                >
                  First Name
                </p>
                <input
                  type="text"
                  className="h-58 top-378 pl-2 ml-1 lg:px-0 md:px-2 xl:px-6 py-2 text-black rounded-md border border-gray-300 "
                  placeholder="Enter last name "
                  name="lastName"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="px-2">
                <p
                  className="text-gray-500 flex md:px-0 lg:ml-1"
                  style={{ color: "#848080" }}
                >
                  Last Name
                </p>
                <input
                  type="text"
                  className="h-58 top-378 pl-2  ml-1 lg:pl-0 lg:px-0 xl:px-6 py-2 text-black rounded-md border border-gray-300"
                  placeholder="Enter last name "
                  name="lastName"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="px-3 py-2 flex-row-reverse">
              <label className="flex lg:ml-7"style={{ color: "#848080" }}>
                Email Address
              </label>
              <input
                type="email"
                className="h-58 px-24 lg:px-36 lg:mr-24   py-2 rounded-md border text-black border-gray-300"
                placeholder=" Enter your email address "
                name="emailAddress"
                value={email}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>
            <div className=" rounded-2xl flex py-2 lg:ml-7">
              <div className="ml-2">
                <p className="text-gray-500 flex lg:ml-1">Password</p>
                <input
                  type="password"
                  className="h-58 top-378 pl-2 ml-1 lg:pl-0 lg:px-0 xl:px-6 py-2 text-black rounded-md border border-gray-300 "
                  placeholder="Enter Password "
                  name="lastName"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="px-1">
                <p
                  className="text-gray-500 flex lg:ml-2"
                  style={{ color: "#848080"}}
              >
                  Confirm Password
                </p>
                <input
                  type="password"
                  className="h-58 top-378 pl-2 ml-1 lg:pl-1 lg:px-0 xl:px-7 py-2 text-black rounded-md border border-gray-300"
                  placeholder="Enter Confirm Password "
                  name="lastName"
                  value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="py-3  md:w-3/4 lg:ml-8 mt-6 bg-green-500 rounded-2xl ml-9 w-3/3 ">
              <button  onClick={handleSubmit}>
                Singn
              </button>
            </div>

            <div className="hidden lg:flex ml-16 mt-6 space-x-5">
              <div className="flex rounded-lg border border-gray-300 lg:px-2 ">
                <img src={google_s} className="w-8" />
                <label className="text-black text-sm mt-2 mb-2">
                  Continue with Google
                </label>
              </div>
              <div className="flex rounded-lg border border-gray-300 lg:ml-9 px-4 ">
                <img src={apple} className="w-8" />
                <label className="text-black text-sm mt-2 mb-2">
                  Continue with apple
                </label>
              </div>
            </div>

            <div className="sm:hidden flex justify-center ml-28 mt-10">
              <img src={google_s} className="w-16 ml-1 mr-2" />
              <img src={apple} className="w-16" />
            </div>
            <div>
              <p className="mt-10 ml-20">
                2023, Greenwall all Right have Reserved
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Signupp;
