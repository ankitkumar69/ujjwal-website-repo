

import { useState } from "react"
import TextInput from "./component/TextInput"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import MultiUpload from "./utils/multipleupload"
import SingleUpload from "./utils/singleupload"

function Addproperty() {
     const[form,setfrom]=useState({
         title:"",
         city:"",
         landmark:"",
         description:"",
         address:"",
         price:"",
         ImgUrlArray:[],
         videoUrl:""
     })
    
     
      const[file,setfile]=useState(null)
      const[Error,setError]=useState(null)
      const[Loading,setLoading]=useState(false)
           

      const handleChange=(e)=>{
        setfrom((prev)=>{
        return {...prev,[e.target.name]:e.target.value}
        })
        console.log(form)
    }
      const handleFileChange=(e)=>{
           setfile(e.target.value)
      }

      const Navigate=useNavigate()
       // creating property in data base server
      const handleSubmit = async () => {
        setError(null);
        setLoading(true);
        try {
          // const url = await SingleUpload(file);
          // const multiurl = await MultiUpload();
          //  console.log(multiurl)
    
          await axios.post(
            `http://localhost:4000/api/create`, { ...form, videoUrl:"videourl" ,ImgUrlArray:[1,2,3,4,5]},{withCredentials: true });
    
          Navigate("/manageproperty");
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        } 
      };


  return (
      <div className="min-h-[100vh] ">
    <div className='m-auto my-8 max-w-sm min-h-fit p-3 flex flex-col items-center gap-2 border-2 border-gray-300  md:max-w-6xl  md:grid grid-cols-2' >
         <div className="mx-auto col-span-2">
            <h2 className="text-lg font-bold md:row-span-2">Add Property</h2>
         </div>
      <TextInput name="title" label="Title" type="text" onChange={handleChange} />
      <TextInput  name="address" label="Address" type="text"  onChange={handleChange} />
      <TextInput name="city" label="City" type="text"  onChange={handleChange} />
      <TextInput name="price" label="Price" type="number"  onChange={handleChange} />
      <TextInput  name="landmark" label="Landmark" type="text" onChange={handleChange} />
      <TextInput  name="Images" label=" Choose 5 Image" type="file"  onChange={handleFileChange}  />
     <p className="flex flex-col"> <label className="font-semibold">Desciption</label> <textarea name="description"  type="text"  onChange={handleChange} className="border-2 border-gray-300"></textarea> </p>
      <TextInput  name="video" label=" Upload Video" type="file"  onChange={handleChange} />
     
        {/* <div className="flex gap-2 mx-auto">
             <label className="text-xl font-semibold" >video</label>
              <input type="file"></input>
          
        </div> */}
           <p>{Error&&Error}</p>
          <button className="border-none w-[90%] md:w-2/4 my-2 p-2 mx-auto py-2 bg-blue-600  rounded-lg hover:bg-blue-700 text-white font-medium  col-span-2" onClick={handleSubmit}>{Loading?"Adding...":"Add"}</button>
           {/* <span className="block mx-auto col-span-2">Have an Account?<span className="text-blue-600 cursor-pointer"><Link to={"/login"}>Login</Link></span></span>  */}
    </div>
    </div>
  )
}

export default Addproperty
