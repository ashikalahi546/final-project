import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="border md:w-[519px] mx-auto py-8  md:px-[70px] sm:px-10  rounded-2xl">
      <h1 className="lg:text-[40px] md:text-4xl text-2xl font-semibold text-center">
        Sign up to Continue
      </h1>
      <div className="flex flex-col gap-[30px] pt-[30px] px-6">
        <input
          type="name"
          placeholder="User name"
          className="border outline-none border-[#393939] w-full px-3 h-11 rounded-lg text-sm"
        />
        <input
          type="text"
          placeholder="User or Seller"
          className="border outline-none border-[#393939] w-full px-3 h-11 rounded-lg text-sm"
        />
        <input
          type="email"
          placeholder="Email"
          className="border outline-none border-[#393939] w-full px-3 h-11 rounded-lg text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="border outline-none border-[#393939] w-full px-3 h-11 rounded-lg text-sm"
        />
        <input
          type="photo"
          placeholder="Upload profile photo"
          className="border outline-none border-[#393939] w-full px-3 h-11 rounded-lg text-sm"
        />
        <div className="pt-5">
          <button className="bg-primary h-11 w-full  text-white md:text-base text-xs    font-bold rounded-lg ">
            Sign Up
          </button>

          <Link to="/login">
            <button className="border-primary border h-11 w-full  text-primary md:text-base text-xs font-bold rounded-lg  mt-5">
              Log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
