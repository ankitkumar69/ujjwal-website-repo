

function login() {
  return (
    //  login
    <div className=" max-w-lg mx-auto p-5 grid grid-cols-2 gap-4 shadow-lg hover:shadow-2xl">
      <div className=" col-span-2 mx-auto ">
        <h2 className="text-lg font-bold">Login</h2>
      </div>
      <div className="col-span-2 mx-auto flex flex-col ">
        <label className="text-xl font-semibold" htmlFor="username">
          User Name :
        </label>
        <input className="border-2 border-solid border-grey py-2 px-6" type="text" name="username"></input>{" "}
      </div>
      <div className="col-span-2 mx-auto flex flex-col">
        <label className="text-xl font-semibold" htmlFor="username">
          Password :
        </label>
        <input
          className="border-2 border-solid border-grey py-2 px-6"
          type="text"
          name="username"
        ></input>{" "}
      </div>

      <button className="col-span-2 block w-60 py-2 px-5 mx-auto bg-green-500 p-2 text-white font-semibold">
        Login
      </button>
    </div>
  );
}

export default login;
