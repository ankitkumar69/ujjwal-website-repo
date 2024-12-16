

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
      queryParams.set("max", filterstate?.max);
      queryParams.set("min", filterstate?.min);
      queryParams.set("category", filterstate?.category);
      queryParams.set("sort", filterstate?.sort);
  
      const getallproperty = async () => {
        setError(null);
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
             {filterOpen&&<div className=" absolute bg-white md:bg-none md:static z-10 shadow-lg p-2 md:flex justify-around"  onMouseEnter={()=>setfilterOpen(true)} onMouseLeave={()=>setfilterOpen(false)}>
                 
                   <div >
                 <label className="pr-2">City</label>
                 <select className="w-20 p-2 rounded-xl">
                  <option value={"gaya"}>Gaya</option>
                  <option value={"Tekari"}>Tekari</option>
                  <option value={"latest"}>latest</option>
                  <option value={"Best"}>Best</option>
                 </select>
                 </div>
                   <div >
                 <label className="pr-2">City</label>
                 <select className="w-20 p-2 rounded-xl">
                  <option value={"gaya"}>Gaya</option>
                  <option value={"Tekari"}>Tekari</option>
                  <option value={"latest"}>latest</option>
                  <option value={"Best"}>Best</option>
                 </select>
                 </div>
                   <div >
                 <label className="">City</label>
                 <select className="w-20 p-2 rounded-xl">
                  <option value={"gaya"}>Gaya</option>
                  <option value={"Tekari"}>Tekari</option>
                  <option value={"latest"}>latest</option>
                  <option value={"Best"}>Best</option>
                 </select>
                 </div>
                   <button className="w-40 p-3 bg-blue-600 text-white rounded-xl">Apply</button>
             </div>}
             
          {/* all the properties are listed here  */}
           <div className="flex flex-wrap  gap-5 mt-2">
            {Allcard?.length===0? <p className="text-red-600 mx-auto"> No Property Available !</p> :  Allcard?.map((item,index)=>{
                return  <Card  {...item} key={index} />
            })}
           </div>
    </div>
  );
};

export default Allproperty;
