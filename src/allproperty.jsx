

import  { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./Card";
import {  FaCaretDown, FaCaretUp } from "react-icons/fa6";
const Allproperty = () => {

  const [filterstate, setFilteredstate] = useState(); // Stores filtered data
  const [Error ,setError]=useState();
  const [Loading ,setLoading]=useState();
  const [Allcard ,setAllcard]=useState([]);

   const [filterOpen,setfilterOpen]=useState(false);


     
    useEffect(() => {
      const queryParams = new URLSearchParams();
      queryParams.set("state", filterstate?.max);
      queryParams.set("price", filterstate?.min);
      queryParams.set("city", filterstate?.category);
      
  
      const getallproperty = async () => {
        setError(null);
         setLoading(true)
        try {
          const properties = await axios.get(
            `https://ujjwal-backend.onrender.com/api/getproperty?${queryParams.toString()}`
          );
         
          setAllcard(properties.data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
      getallproperty();
    }, []);
  
  console.log(Allcard)

  return (
    <div className="p-4 min-h-screen">
             <p className="flex" onMouseEnter={()=>setfilterOpen(true)} onMouseLeave={()=>setfilterOpen(false)}> <span className="inline-block pr-2 font-bold">Filter :</span>    <span className="inlineblock text-3xl text-gray-400" onClick={()=>setfilterOpen(!filterOpen)}>{!filterOpen?<FaCaretDown></FaCaretDown>:<FaCaretUp></FaCaretUp>}</span></p>  
           {/* filter  */}
             {filterOpen&&<div className=" absolute bg-white md:bg-none md:static z-10 shadow-lg p-2 gap-3 md:flex justify-around rounded"  onMouseEnter={()=>setfilterOpen(true)} onMouseLeave={()=>setfilterOpen(false)}>
                 
                   <div  className="gap-2 mt-3">
                 <label className="pr-2">City:</label>
                    <input type="text" placeholder="city" className="p-2  border border-black rounded"></input>
                 </div>
                   <div className="mt-3">
                 <label className="pr-2" >Price:</label>
                    <input type="number" placeholder="price" className="p-2  border border-black  rounded"></input>
                 </div>
                   <div className="mt-3" >
                 <label className="">State:</label>
                   <input type=" text" placeholder="enter state" className="p-2  border border-black  rounded "></input>
                 </div>
                   <button className="w-40 p-3 mt-3 bg-blue-600 text-white rounded-xl">Apply</button>
             </div>}
             
          {/* all the properties are listed here  */}
           <div className="flex flex-wrap  gap-5 mt-2">
            {Loading ?<p className="text-gray-400 mx-auto" >Loading...</p>:Error?<p className="text-red-500">{
              Error}</p>:Allcard?.length===0? <p className="text-red-600 mx-auto"> No Property Available !</p> :  Allcard?.map((item,index)=>{
                return  <Card  {...item} key={index} />
            })}
           </div>
    </div>
  );
};

export default Allproperty;
