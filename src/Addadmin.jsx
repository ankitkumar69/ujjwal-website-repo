import { useState } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"

function Addadmin() { 
     
   const[searchinput,setsearchinput]=useState("")
   const[admin,setadmin]=useState(false)

     const[res,setres]=useState();


     const queryParams = new URLSearchParams();
     queryParams.set("email", searchinput);
     queryParams.set("isAdmin",admin)

    const updateHandler= async()=>{

      try{
      await Axios.put(`http://localhost:4000/api/updateuser?${queryParams.toString()}`,{withCredentials:true})
      
      
    }
   
  catch(err){
     console.log(err)
  }
}


const searchHandler= async()=>{

  try{
  const user= await Axios.put(`http://localhost:4000/api/getalluser?${queryParams.toString()}`,{withCredentials:true})
    setres(user.data)
  
}

catch(err){
 console.log(err)
}
}  


    console.log(res)
  return (
     <div className="h-[100vh]">
      <div className=" mx-auto  border-2 text-center border-gray-300">
        <h3 className="font-bold text-lg">Add Admin</h3>
        <p className="font-semibold">Make Sure Your Have An Account </p>
           <div className="w-full flex justify-center">
               <input type="text"  placeholder="E-mail" className=" border-2 border-gray-300 p-2" onChange={(e)=>setsearchinput(e.target.value)}></input>
                <button className=" w-28 p-2 bg-blue-500 text-white" onClick={updateHandler}>{res?.isAdmin?"Add Admin":"Search"}</button>
               
           </div>
           <p>Don&apos;t have an account <Link to={'/register'}><span className="text-blue-500">Register</span></Link></p>
      </div>
                 <h3 className="text-center font-bold text-lg">All Admins</h3>
               <ul className="max-w-80 mx-auto">{ res?.email && <li>{res?.email} {res?.isAdmin&&  res?.isAdmin?<span className="block cursor-pointer text-red-500 "  onClick={()=>setadmin(false)}>Remove</span>:<span className=" block cursor-pointer text-green-500" onClick={()=>setadmin(true)}>Addadmin</span>  }</li>}</ul> 
      </div>
  )
}

export default Addadmin
