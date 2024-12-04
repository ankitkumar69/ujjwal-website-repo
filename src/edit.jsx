
import  { useEffect, useState } from "react";

import axios from "axios";
import TextInput from "./component/TextInput";
import uploadfile from "./utils/singleupload";
import { useNavigate, useParams } from "react-router-dom";
// import multiuploadfile from './multiuploader'

function Edit() {
  
  const [err, seterr] = useState(null);
  const [buttonloading, setbuttonloading] = useState(false);

  const [Editproperty, setEditproperty] = useState();

  const handlechange = (e) => {
    setEditproperty((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const Navigate = useNavigate();

  const params = useParams();
  useEffect(() => {
    const getsingleproperty = async () => {
      const res = await axios.get(
        `http://localhost:4000/api/getsingleproperty/${params.id}`,
        { withCredentials: true }
      );
      console.log(res.data)
      setEditproperty(res.data)
      
    };
    getsingleproperty();
  }, []);





  const handleUpdateProperty = async () => {
    seterr(null);
    setbuttonloading(true);
    try {
      //  const  multiurl = await multiuploadfile(multiplefile)
      //  console.log(multiurl);

      const res = await axios.put(
        `http://localhost:4000/api/updateproperty/${params.id}`,{...Editproperty},
        { withCredentials: true }
      );
             console.log(res.data)
      Navigate("/manageproperty");
      setbuttonloading(false);
    } catch (err) {
      seterr(err.message);
      setbuttonloading(false);
    }
  };

  return (
    <div className="min-h-[100vh] ">
    <div className='m-auto my-8 max-w-sm min-h-fit p-3 flex flex-col items-center gap-2 border-2 border-gray-300  md:max-w-6xl  md:grid grid-cols-2' >
         <div className="mx-auto col-span-2">
            <h2 className="text-lg font-bold md:row-span-2">Edit Your  Property</h2>
         </div>
      <TextInput name="title" label="Title" type="text" value={Editproperty?.title} onChange={handlechange} />
      <TextInput  name="address" label="Address" type="text" value={Editproperty?.address} onChange={handlechange} />
      <TextInput name="city" label="City" type="text" value={Editproperty?.city} onChange={handlechange} />
      <TextInput name="price" label="Price" type="number" value={Editproperty?.price}  onChange={handlechange} />
      <TextInput  name="landmark" label="Landmark" type="text" value={Editproperty?.landmark} onChange={handlechange} />
      <TextInput  name="Images" label=" Choose 5 Image" type="file"   />
     <p className="flex flex-col"> <label className="font-semibold">Desciption</label> <textarea name="description"  type="text"  onChange={handlechange} className="border-2 border-gray-300" value={Editproperty?.description}></textarea> </p>
      <TextInput  name="video" label=" Upload Video" type="file"  onChange={handlechange} />
     
        {/* <div className="flex gap-2 mx-auto">
             <label className="text-xl font-semibold" >video</label>
              <input type="file"></input>
          
        </div> */}
       
          <button className="border-none w-[90%] md:w-2/4 my-2 p-2 mx-auto py-2 bg-blue-600  rounded-lg hover:bg-blue-700 text-white font-medium  col-span-2" onClick={handleUpdateProperty}>Update</button>
           {/* <span className="block mx-auto col-span-2">Have an Account?<span className="text-blue-600 cursor-pointer"><Link to={"/login"}>Login</Link></span></span>  */}
    </div>
    </div>
  );
}

export default Edit;
