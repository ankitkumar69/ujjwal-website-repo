

import { useState } from "react"

import { useNavigate } from "react-router-dom"
import axios from "axios"
import multiuploadfile from "./utils/multipleupload"
 import singleVideoUpload from "./utils/singlevideoupload"

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
    
     
      const[Imgfile,setImgfile]=useState([])
      const[Videofile,setVideofile]=useState('')
      const[Error,setError]=useState(null)
      const[Loading,setLoading]=useState(false)
           

      const handleChange=(e)=>{
        setfrom((prev)=>{
        return {...prev,[e.target.name]:e.target.value}
        })
        
    }
     

      const Navigate=useNavigate()
       // creating property in data base server
      const handleSubmit = async () => {
        setError(null);
        setLoading(true);
        try {
          // 
          // const photourl = await multiuploadfile(Imgfile);
          // const videourl = await singleVideoUpload(Videofile);
        
        
    
          await axios.post(
            `https://ujjwal-backend.onrender.com/api/create`, { ...form, },{withCredentials: true });
    
          Navigate("/manageproperty");
       
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
      
        {/* input  */}
      <div className="w-full mx-auto px-5 gap-3 flex flex-col  ">
      <label className="font-semibold  text-lg">Title</label>
      <input
        className="border-2 border-solid border-grey w-[100%] p-2  rounded-sm"
        name="title"  type="text" onChange={handleChange}
        ></input>
    </div>
        {/* input  */}
      <div className="w-full mx-auto px-5 gap-3 flex flex-col  ">
      <label className="font-semibold  text-lg">Address</label>
      <input
        className="border-2 border-solid border-grey w-[100%] p-2  rounded-sm"
        name="address" label="Address" type="text"  onChange={handleChange}
          ></input>
    </div>
        {/* input  */}
      <div className="w-full mx-auto px-5 gap-3 flex flex-col  ">
      <label className="font-semibold  text-lg">City</label>
      <input
        className="border-2 border-solid border-grey w-[100%] p-2  rounded-sm"
        name="city" label="City" type="text"  onChange={handleChange}
          ></input>
    </div>
        {/* input  */}
      <div className="w-full mx-auto px-5 gap-3 flex flex-col  ">
      <label className="font-semibold  text-lg">Price</label>
      <input
        className="border-2 border-solid border-grey w-[100%] p-2  rounded-sm"
        name="price" label="Price" type="number"  onChange={handleChange}
         ></input>
    </div>
        {/* input  */}
      <div className="w-full mx-auto px-5 gap-3 flex flex-col  ">
      <label className="font-semibold  text-lg">Landmark</label>
      <input
        className="border-2 border-solid border-grey w-[100%] p-2  rounded-sm"
        name="landmark" label="Landmark" type="text" onChange={handleChange}
         ></input>
    </div>
    
        {/* input  */}
      <div className="w-full mx-auto px-5 gap-3 flex flex-col  ">
      <label className="font-semibold  text-lg">Upload Image</label>
      <input
        className="border-2 border-solid border-grey w-[100%] p-2  rounded-sm"
        name="Images"  type="file"  onChange={(e)=>setImgfile(e.target.files)} multiple required
          ></input>
    </div>
    <p className="flex flex-col"> <label className="font-semibold">Desciption</label> <textarea name="description"  type="text"  onChange={handleChange} className="border-2 border-gray-300"></textarea> </p>
        {/* input  */}
      <div className="w-full mx-auto px-5 gap-3 flex flex-col  ">
      <label className="font-semibold  text-lg">Upload video</label>
      <input
        className="border-2 border-solid border-grey w-[100%] p-2  rounded-sm"
        name="VideoUrl" type="file"  onChange={(e)=>setVideofile(e.target.files[0])} 
          ></input>
    </div>

           <p className="mx-auto text-red-500">{Error&&Error}</p>
          <button className="border-none w-[90%] md:w-2/4 my-2 p-2 mx-auto py-2 bg-blue-600  rounded-lg hover:bg-blue-700 text-white font-medium  col-span-2" onClick={handleSubmit}>{Loading?"Adding...":"Add"}</button>
           
    </div>
    </div>
  )
}

export default Addproperty
