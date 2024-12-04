import { useState } from "react";
import TextInput from "./component/TextInput";
import { Link, useNavigate } from "react-router-dom";

import Axios from "axios";
import singlePicUpload from "./utils/singleupload";

function Register() {
  const Navigate = useNavigate();

  const [form, setfrom] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneno: "",
    password: "",
    isAdmin: false,
    confirmpassword: "",
    gender: "",
  });
  const [profilepic, setprofilepic] = useState(null);
  const [Loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setfrom((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // submit button
  const handleSubmit = async () => {
    setLoading(true);

    const url = await singlePicUpload(profilepic);    // this return the url in url

    const registerres = await Axios.post(
      `http://localhost:4000/api/register`,
      { ...form, profileImg: url },
      { withCredentials: true }
    );

    localStorage.setItem("registerinfo", JSON.stringify(registerres.data._doc));
    Navigate("/");
  };

  return (
    <div className="min-h-[100vh] ">
      <div className="m-auto my-8 max-w-sm min-h-fit p-3 flex flex-col items-center gap-2 border-2 border-gray-300  md:max-w-6xl  md:grid grid-cols-2">
        <div className="mx-auto col-span-2">
          <h2 className="text-lg font-bold md:row-span-2">Register</h2>
        </div>
        <div className="w-full mx-auto px-5 gap-3 flex flex-col  ">
          <label className="font-semibold  text-lg">FirstName</label>
          <input
            className="border-2 border-solid border-grey w-[100%] p-2  rounded-sm"
            type="text"
            name="firstname"
            onChange={handleChange}
            min={5}
            max={8}
          ></input>
        </div>
        <TextInput
          name="lastname"
          label="Last Name"
          type="text"
          onChange={handleChange}
          max={8}
          min={3}
        />
        <TextInput
          name="email"
          label="E-mail"
          type="e-mail"
          onChange={handleChange}
        />
        <TextInput
          name="phone"
          label="Phone No"
          type="phone"
          onChange={handleChange}
        />
        <TextInput
          name="password"
          label="password"
          type="password"
          onChange={handleChange}
        />
        <TextInput
          name="profileimg"
          label="Profile Image"
          type="file"
          onChange={(e) => setprofilepic(() => e.target.files[0])}
        />
        <TextInput
          name="confirmpassword"
          label="Confirm Password"
          type="password"
          onChange={handleChange}
        />

        <div className="flex gap-2 mx-auto">
          <label className="text-xl font-semibold">Gender:</label>
          <label>Male</label>
          <input
            name="gender"
            label="male"
            value={"male"}
            type="radio"
            onChange={handleChange}
          ></input>
          <label>Female</label>
          <input
            name="gender"
            label="female"
            value={"female"}
            type="radio"
            onChange={handleChange}
          ></input>
          <label>Rather Not Say</label>
          <input
            name="gender"
            label="rather_not_say"
            value={"not say"}
            type="radio"
            onChange={handleChange}
          ></input>
        </div>

       {!Loading?<button
          className="border-none w-[90%] md:w-2/4 my-2 p-2 mx-auto py-2 bg-blue-600  rounded-lg hover:bg-blue-700 text-white font-medium  col-span-2"
          onClick={handleSubmit}
          
        >Submit</button>:<button className="border-none w-[90%] md:w-2/4 my-2 p-2 mx-auto py-2 bg-blue-600  rounded-lg hover:bg-blue-700 text-white font-medium  col-span-2">Loading...</button>}

        <span className="block mx-auto col-span-2">
          Have an Account?
          <span className="text-blue-600 cursor-pointer">
            <Link to={"/login"}>Login</Link>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Register;
