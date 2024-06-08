import { useState } from "react";
import { BsEye } from "react-icons/bs";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className=" flex justify-center ">
      <div className="border md:w-[519px] mx-auto py-8  md:px-[70px] sm:px-10  rounded-2xl w-full items-center ">
        <h2 className="text-center lg:text-[40px] sm:text-3xl text-xl font-medium mb-8">
          Login in to Continue
        </h2>
        <div className="mt-5 px-5">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full mb-5"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full relative"
            />
            <span
              className="absolute right-4 top-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BsEye /> : <FaRegEyeSlash />}
            </span>
          </div>
          <p className="text-end mt-1 text-sm text-[#1F1F1F80]">
            forgotten password?
          </p>
          <button className="border mt-4 w-full h-10 rounded-lg font-medium text-white bg-primary text-sm">
            Log in
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 text-base pt-2.5 font-medium">
          <p className="">Dont’t Have An Account ?</p>
          <Link to="/register" className=" text-primary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
