import axios from "axios";
import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {


  const [useremail, setuseremail] = useState("");
  const [password, setpassword] = useState("");

  const [Error, setError] = useState(null);
  const Navigate = useNavigate();

  const handleloginsubmit = async () => {
    try {
      const loginpost = await axios.post(
        "https://ujjwal-backend.onrender.com/api/login",
        { useremail, password },
        { withCredentials: true }
      );

      setError(loginpost.data);
      if (loginpost) {
        Navigate("/");
      }

      localStorage.setItem("logininfo", JSON.stringify(loginpost.data));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    //  login
    <div className="min-h-[80vh] flex justify-center items-center ">
      <div className=" max-w-lg  mx-auto p-5 grid grid-cols-2 gap-4 border-2">
        <div className=" col-span-2 mx-auto ">
          <h2 className="text-lg font-bold">Login</h2>
        </div>
        <div className="col-span-2 mx-auto flex  ">
          <input
            className="border-2 border-solid border-grey py-2 px-6"
            type="text"
            pattern="ankit@gmail.com"
            name="email"
            placeholder="E-mail"
            onChange={(e)=>setuseremail(e.target.value)}
          ></input>{" "}
        </div>
        <div className="col-span-2 mx-auto flex ">
          <input
            className="border-2 border-solid border-grey py-2 px-6"
            type="password"
            name="username"
            placeholder="Password"
            onChange={(e)=>setpassword(e.target.value)}
          ></input>{" "}
        </div>
              <p className="mx-auto col-span-2 text-red-600 "> {Error&&Error}</p>
        <button className="col-span-2 block w-60 px-4 py-2 mt-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700  font-semibold" onClick={handleloginsubmit}>
          Login
        </button>
       
         <p className="col-span-2">Don&apos;t have an Account?<span className="text-blue-700"><Link to={"/register"}>Register</Link></span></p>
      </div>
    </div>
  );
}

export default Login;
