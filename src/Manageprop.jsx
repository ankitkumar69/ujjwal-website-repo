import { useEffect, useState } from "react";
import Card from "./Card"
import { FaEdit, FaTrash,} from "react-icons/fa";
import { Link } from "react-router-dom";
import Axios from "axios";


function Manageprop() {

  const [allproperty, setallproperty] = useState([])
    const [refetch ,setrefetch]=useState(false);
  const [loding, setloding] = useState(false)
  const [err,seterr]=useState(null)

        // deleting property function
        const handlePropertyDelete=async(id)=>{
          const res=await Axios.delete(`https://ujjwal-backend.onrender.com/api/deleteproperty/${id}`,{withCredentials:true})
                console.log(res)
                setrefetch(!refetch)
    }

  useEffect(() => {

    const getallproperty = async () => {
      try {
             seterr(null)
             setloding(true)
        const singleUser = await Axios.get(`https://ujjwal-backend.onrender.com/api/allland`,{withCredentials:true})
        setallproperty(singleUser.data)
        setloding(false)
       
      } catch (err) {
        setloding(false)
          seterr(err.message);
         
      }
    }

    getallproperty()

  }, [refetch]);

  


    
    

  return (
      <>
      <h3 className="ml-3 mt-3 font-bold text-lg">Manage Your properites</h3>
    <div className=" min-h-[100vh] gap-8 flex flex-wrap justify-center mt-4">
      {loding?"Loading..": err?<p>{err}</p>: allproperty.length===0? <p className="text-red-600">Oops! no property found</p>: allproperty?.map((item,index)=><div className="" key={index}>
              <Card {...item} />
              <div className="flex justify-end gap-2">
              <Link to={`/edit/${item?._id}`} key={item?._id}>  <button className="cursor-pointer text-2xl mt-2"><FaEdit></FaEdit></button></Link> 
               <button className="cursor-pointer text-2xl mt-2" onClick={()=>handlePropertyDelete(item?._id)}><FaTrash ></FaTrash></button>
              </div>
      </div>)}
    </div>
    </>
  )
}

export default Manageprop
