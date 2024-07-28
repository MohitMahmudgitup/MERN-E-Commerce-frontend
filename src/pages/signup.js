import React, { useState } from 'react'
import LoginIcon from "../assest/signin.gif"
import { FaEye } from "react-icons/fa6";
import { IoMdEyeOff } from "react-icons/io";
import imageToBase64 from '../helpers/imageToBase64';
import summeryAPI from '../common';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Signup() {

    const [showPassword, setShowPassword] = useState();
    const [showConfirmPassword, setShowConfirmPassword] = useState();
    const [data, setData] = useState({
      email: "",
      password: "",
      ConfirmPassword:'',
      username:'',
      profilePic:'',
    });
    const navigate = useNavigate()
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
  


  const heandleSubmit = async (element)=>{
   element.preventDefault()
    if(data.password === data.ConfirmPassword){
      const dataRespons = await fetch(summeryAPI.signUp.url,{
        method : summeryAPI.signUp.method,
        headers : {
          "content-type" : "application/json "
        },
        body : JSON.stringify(data)
       })
       const dataApi = await dataRespons.json()
       if(dataApi.success){
        toast.success(dataApi.massage)
        navigate("/login")
       }
       if(dataApi.error){
        toast.error(dataApi.massage)
       }
    }else{
      console.log("Error")
    }
  }



  const hendleUploadPic = async (e)=>{
    let file = e.target.files[0]
    let imageURL = await imageToBase64(file)
    console.log(imageURL)

    setData ((preve)=>{
      return{
        ...preve,
        profilePic:imageURL
      }
    })
  }
  
    return (
      <>
  
      <section id="signUp">
        <div className="mx-auto container p-4 ">
          <div className="bg-white px-4 py-6 max-w-sm mx-auto rounded-md ">
            <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full  ">
              <div>
                <img className="rounded-full " src={data.profilePic || LoginIcon} alt="" />  
              </div>
              <form>
                  <label>
                    <input className='hidden  ' type='file' onChange={hendleUploadPic}/>
                  <div className='w-full cursor-pointer text-xs pb-5 pt-2 bg-opacity-80 text-center bg-slate-100 absolute bottom-0'>
                Upload Photo
              </div>
                  </label>
              </form>
            </div>
            <form className="pt-7" onSubmit={heandleSubmit}>


              <div className="grid gap-1">
                <label>User Name:</label>
                <div className="px-1 bg-zinc-50 rounded-md">
                  <input
                    value={data.username}
                    onChange={handleOnChange}
                    name="username"
                    className="w-full h-full outline-none py-2 bg-zinc-50 rounded-md"
                    type="text"
                    placeholder="Enter your User Name..."
                    required
                  />
                </div>
              </div>

                    
              <div className="grid  mt-2  gap-1">
                <label>Email:</label>
                <div className="px-1 bg-zinc-50 rounded-md">
                  <input
                    value={data.email}
                    onChange={handleOnChange}
                    name="email"
                    className="w-full h-full outline-none py-2 bg-zinc-50 rounded-md"
                    type="email"
                    placeholder="Enter your email..."
                    required
                  />
                </div>
              </div>


                

              <div className="grid mt-2 gap-1">
                <label>Password:</label>
                <div className="px-1 flex items-center bg-zinc-50 rounded-md">
                  <input
                    value={data.password}
                    onChange={handleOnChange}
                    name="password"
                    className=" w-full h-full outline-none py-2 bg-zinc-50  rounded-md"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password..."
                    required
                  />
                  <div
                    className="cursor-pointer text-xl"
                    onClick={() => setShowPassword((preve) => !preve)}
                  >
                    <span>{showPassword ? <FaEye /> : <IoMdEyeOff />}</span>
                  </div>
                </div>
              </div>

              <div className="grid mt-2 gap-1">
                <label>Confirm Password:</label>
                <div className="px-1 flex items-center bg-zinc-50 rounded-md">
                  <input
                    value={data.ConfirmPassword}
                    onChange={handleOnChange}
                    name="ConfirmPassword"
                    className=" w-full h-full outline-none py-2 bg-zinc-50  rounded-md"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Enter your Confirm password..."
                    required
                  />
                  <div className="cursor-pointer text-xl" onClick={() => setShowConfirmPassword((preve) => !preve)}>
                    <span>{showConfirmPassword? <FaEye /> : <IoMdEyeOff />}</span>
                  </div>
                </div>
                
              </div>

              <input
                className=" bg-zinc-800 mt-5 hover:bg-zinc-600 hover:scale-110 transition-all text-white rounded-md w-full py-2 my-4 mx-auto block"
                type="submit" value='Sign Up'
              />
            </form>
          </div>
        </div>
      </section>
      </>
    );
}

export default Signup