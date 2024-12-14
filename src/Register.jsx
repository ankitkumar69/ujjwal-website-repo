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
  const [Error, setError] = useState(null);
  const [formError, setformError] = useState({});

  // Validation Rules
  const validate = (data) => {
    const validationErrors = {};

    if (!data.firstname.trim()) {
      validationErrors.firstname = "First name is required";
    } else if (data.firstname.length < 3) {
      validationErrors.firstname = "First name must be at least 3 characters";
    }
    if (!data.lastname.trim()) {
      validationErrors.lastname = "Last name is required";
    } else if (data.lastname.length < 3) {
      validationErrors.lastname = "Last name must be at least 3 characters";
    }

    if (!data.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      validationErrors.email = "Email is invalid";
    }

    if (!data.password) {
      validationErrors.password = "Password is required";
    } else if (data.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }
    if (!data.confirmpassword) {
      validationErrors.confirmpassword = "Password doen't match";
    } else if (data.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    return validationErrors;
  };

  //handling form
  const handleChange = (e) => {
       setformError({})
    setfrom((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // submit function
  const handleSubmit = async () => {
    const validationErrors = validate(form);
    setformError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Call backend API or perform any action here
      setLoading(!Loading);
      try {
        // this return the url in url
        const url = await singlePicUpload(profilepic);
        const registerres = await Axios.post(
          `http://localhost:4000/api/register`,
          { ...form, profileImg: url },
          { withCredentials: true }
        );
  
        localStorage.setItem(
          "registerinfo",
          JSON.stringify(registerres.data._doc)
        );
        setLoading(!Loading);
        Navigate("/");
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }

    } 

    
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
           
          ></input>
          {formError.firstname && <p className="text-red-600">{formError.firstname}</p>}
        </div>
     

        <div className="w-full mx-auto px-5 gap-3 flex flex-col  ">
          <label className="font-semibold  text-lg">LastName</label>
          <input
            className="border-2 border-solid border-grey w-[100%] p-2  rounded-sm"
            type="text"
            name="lastname"
            onChange={handleChange}
           
          ></input>
          {formError.lastname && <p className="text-red-600">{formError.lastname}</p>}
        </div>
        
          
        <div className="w-full mx-auto px-5 gap-3 flex flex-col  ">
          <label className="font-semibold  text-lg">E-mail</label>
          <input
            className="border-2 border-solid border-grey w-[100%] p-2  rounded-sm"
            type="e-mail"
            name="email"
            onChange={handleChange}
         
          ></input>
          {formError.email && <p className="text-red-600">{formError.email}</p>}
        </div>

        <div className="w-full mx-auto px-5 gap-3 flex flex-col  ">
          <label className="font-semibold  text-lg">Phone NO</label>
          <input
            className="border-2 border-solid border-grey w-[100%] p-2  rounded-sm"
            type="phone"
            name="phone"
            onChange={handleChange}
            
          ></input>
          {formError.phoneno && <p className="text-red-600">{formError.phoneno}</p>}
        </div>

        <div className="w-full mx-auto px-5 gap-3 flex flex-col  ">
          <label className="font-semibold  text-lg">Password</label>
          <input
            className="border-2 border-solid border-grey w-[100%] p-2  rounded-sm"
            type="password"
            name="password"
            onChange={handleChange}
           
          ></input>
          {formError.password && <p className="text-red-600">{formError.password}</p>}
        </div>

        
        <TextInput
          name="profileimg"
          label="Profile Image"
          type="file"
          onChange={(e) => setprofilepic(() => e.target.files[0])}
        />

           <div className="w-full mx-auto px-5 gap-3 flex flex-col  ">
          <label className="font-semibold  text-lg">Confirm Password</label>
          <input
            className="border-2 border-solid border-grey w-[100%] p-2  rounded-sm"
            type="password"
            name="confirm Password"
            onChange={handleChange}
            
          ></input>
          {formError.confirmpassword && <p className="text-red-600">{formError.confirmpassword}</p>}
        </div>

        

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
        {Error && <p className="mx-auto col-span-2 text-red-500">{Error}</p>}
        {Loading ? (
          <button className="border-none w-[90%] md:w-2/4 my-2 p-2 mx-auto py-2 bg-blue-600  rounded-lg hover:bg-blue-700 text-white font-medium  col-span-2">
            Loading...
          </button>
        ) : (
          <button
            className="border-none w-[90%] md:w-2/4 my-2 p-2 mx-auto py-2 bg-blue-600  rounded-lg hover:bg-blue-700 text-white font-medium  col-span-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}

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
