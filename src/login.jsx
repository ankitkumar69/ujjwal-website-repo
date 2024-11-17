import { Link } from "react-router-dom";

function login() {
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
            name="username"
            placeholder="E-mail"
          ></input>{" "}
        </div>
        <div className="col-span-2 mx-auto flex ">
          <input
            className="border-2 border-solid border-grey py-2 px-6"
            type="password"
            name="username"
            placeholder="Password"
          ></input>{" "}
        </div>

        <button className="col-span-2 block w-60 px-4 py-2 mt-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700  font-semibold">
          Login
        </button>
         <p className="col-span-2">Don't have an Account?<span className="text-blue-700"><Link to={"/register"}>Register</Link></span></p>
      </div>
    </div>
  );
}

export default login;
