
import { useState } from "react"
import TextInput from "./component/TextInput"
import { Link } from "react-router-dom"

function Register() {
     const[form,setfrom]=useState({
         firstname:"",
         lastname:"",
         email:"",
         phone:"",
         password:"",
         coverImg:"",
         confirmpassword:"",
         gender:""
     })
    
      const handleChange=(e)=>{
          setfrom((prev)=>{
          return {...prev,[e.target.name]:e.target.value}
          })
          console.log(form)
      }
      const[file,setfile]=useState(null)
           
      const handleFileChange=(e)=>{
           setfile("")
      }

  return (
      <div className="min-h-[100vh] ">
    <div className='m-auto my-8 max-w-sm min-h-fit p-3 flex flex-col items-center gap-2 border-2 border-gray-300  md:max-w-6xl  md:grid grid-cols-2' >
         <div className="mx-auto col-span-2">
            <h2 className="text-lg font-bold md:row-span-2">Register</h2>
         </div>
      <TextInput name="firstname" label="First Name" type="text" onChange={handleChange} />
      <TextInput  name="lastname" label="Last Name" type="text"  onChange={handleChange} />
      <TextInput name="email" label="E-mail" type="e-mail"  onChange={handleChange} />
      <TextInput name="phone" label="Phone No" type="phone"  onChange={handleChange} />
      <TextInput  name="password" label="password" type="password" onChange={handleChange} />
      <TextInput  name="coverImg" label="Cover Image" type="file"  onChange={handleFileChange} />
      <TextInput  name="confirmpassword" label="Confirm Password" type="password"  onChange={handleChange} />
     
        <div className="flex gap-2 mx-auto">
             <label className="text-xl font-semibold" >Gender:</label>
             <label >Male</label>
            <input name="gender" label="male" value={"male"} type="radio" onChange={handleChange}></input>
            <label >Female</label>
            <input name="gender" label="female" value={"female"} type="radio" onChange={handleChange}></input>
            <label >Rather Not Say</label>
            <input name="gender" label="rather_not_say" value={"not say"} type="radio" onChange={handleChange}></input>
          
        </div>
       
          <button className="border-none w-[90%] md:w-2/4 my-2 p-2 mx-auto py-2 bg-blue-600  rounded-lg hover:bg-blue-700 text-white font-medium  col-span-2">Submit</button>
           <span className="block mx-auto col-span-2">Have an Account?<span className="text-blue-600 cursor-pointer"><Link to={"/login"}>Login</Link></span></span> 
    </div>
    </div>
  )
}

export default Register
