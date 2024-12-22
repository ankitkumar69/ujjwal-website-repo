import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"

function Addadmin() { 
     
   const[searchinput,setsearchinput]=useState('')
   const[admin,setadmin]=useState(true)

     const[alladmin,setalladmin]=useState([]);


     const queryParams = new URLSearchParams();
     queryParams.set("email", searchinput);
     queryParams.set("isAdmin",admin)

    const updateHandler= async()=>{

      try{
      await Axios.put(`https://ujjwal-backend.onrender.com/api/updateuser?${queryParams.toString()}`,{withCredentials:true})
      
      
    }
   
  catch(err){
     console.log(err)
  }
}

useEffect(()=>{
const getallUser= async()=>{

  try{
  const user= await Axios.get(`https://ujjwal-backend.onrender.com/api/getalluser`,{withCredentials:true})
    setalladmin(user.data)
  
}

catch(err){
 console.log(err)
}
}  
 getallUser()
},[])

    console.log(alladmin)
  return (
     <div className="h-[100vh]">
      <div className=" mx-auto  border-2 text-center border-gray-300">
        <h3 className="font-bold text-lg">Add Admin</h3>
        <p className="font-semibold">Make Sure Your Have An Account </p>
           <div className="w-full flex justify-center">
               <input type="text"  placeholder="E-mail" className=" border-2 border-gray-300 p-2" onChange={(e)=>setsearchinput(e.target.value)}></input>
                <button className=" w-28 p-2 bg-blue-500 text-white rounded-sm"  onClick={updateHandler}>
                  Add Admin
                </button>
               
           </div>
           <p>Don&apos;t have an account <Link to={'/register'}><span className="text-blue-500">Register</span></Link></p>
      </div>
                 <h3 className="text-center font-bold text-lg  ">All Admins</h3>
                            <div className=" text-center shadow">
                                {alladmin?.map((item,i)=><div key={i} className="flex items-center justify-center gap-2"><img src={item.profileImg} className="w-14 h-14 rounded-full"></img><span >{item.email}</span><button className="bg-blue-500 text-white p-2 rounded-sm" onClick={()=>updateHandler(item.email,item.isAdmin)}>Remove Admin</button></div>)}
                            </div>
      </div>
  )
}

export default Addadmin
