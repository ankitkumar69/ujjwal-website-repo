import { Link } from "react-router-dom"

function Addadmin() {
  return (
     <div className="h-[100vh]">
      <div className=" mx-auto  border-2 text-center border-gray-300">
        <h3 className="font-bold text-lg">Add Admin</h3>
        <p className="font-semibold">Login with same e-mail </p>
           <div className="w-full flex justify-center">
               <input type="e-mail" className=" border-2 border-gray-300 p-2"></input>
                <button className=" w-28 p-2 bg-blue-500">Add</button>
               
           </div>
           <p>Don't have an account <Link to={'/register'}><span className="text-blue-500">Register</span></Link></p>
      </div>
                 <h3 className="text-center font-bold text-lg">All Admins</h3>
               <ul className="max-w-80 mx-auto"> {Array.from({length:5}).map((item,index)=><li key={index}>akumar46360@gmail.com  <span className="text-red-500 cursor-pointer">Remove</span></li>)}</ul> 
      </div>
  )
}

export default Addadmin
