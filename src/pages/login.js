import React, { useState } from "react";
import LoginIcon from "../assest/signin.gif";
import { FaEye } from "react-icons/fa6";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const {name, value} = e.target;
    // console.log(e.target.value)
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

const heandleSubmit = (element)=>{
 element.preventDefault()
}

  return (
    <>

    <section id="login">
      <div className="mx-auto container p-4 ">
        <div className="bg-white px-4 py-6 max-w-sm mx-auto rounded-md">
          <div className="w-20 h-20 mx-auto ">
            <img className="rounded-full " src={LoginIcon} alt="" />
          </div>
          <form className="pt-7" onSubmit={heandleSubmit}>
            <div className="grid  gap-1">
              <label>Email:</label>
              <div className="px-1 bg-zinc-50 rounded-md">
                <input
                  value={data.email}
                  onChange={handleOnChange}
                  name="email"
                  className="w-full h-full outline-none py-2 bg-zinc-50 rounded-md"
                  type="email"
                  required
                  placeholder="Enter your email..."
                />
              </div>
            </div>
            <div className="grid mt-2.5 gap-1">
              <label>Password:</label>
              <div className="px-1 flex items-center bg-zinc-50 rounded-md">
                <input
                  value={data.password}
                  onChange={handleOnChange}
                  name="password"
                  required
                  className=" w-full h-full outline-none py-2 bg-zinc-50  rounded-md"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password..."
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEye /> : <IoMdEyeOff />}</span>
                </div>
              </div>
              <Link
                to={"/forgot-password"}
                className="hover:underline text-blue-900 block w-fit ml-auto"
              >
                Forgot Password
              </Link>
            </div>
            <input
              className=" bg-zinc-800 mt-9 hover:bg-zinc-600 hover:scale-110 transition-all text-white rounded-md w-full py-2 my-4 mx-auto block"
              type="submit" value='Login'
            />
          </form>
          <p className="mt-5">
            Don't have account?
            <Link
              to={"/sign-up"}
              className="mx-2 text-blue-900 hover:underline font-bold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Login;
