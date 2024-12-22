
import  Axios  from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

const PropertyDetail = () => {
     
  const [property_detail,setproperty_detail]=useState()
 // property detail fetching
 const {id} = useParams();

   useEffect(()=>{

    const fetchdata=async()=>{  
 const p_detail=await Axios.get(`https://ujjwal-backend.onrender.com/api/getsingleproperty/${id}`)
           setproperty_detail(p_detail.data)
}
 fetchdata()

},[])

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  console.log(property_detail)
  return (
    <div className="max-w-7xl min-h-[100vh] mx-auto p-4">
      {/* Property Title */}
     {property_detail?.city&& <h1 className="text-3xl font-bold mb-4">Land property in {property_detail?.city}</h1>}
      {/* Slider Section */}
      <div className="mb-8 mx-2">
        <Slider {...settings}>
          {property_detail?.ImgUrlArray.map((image, index) => (
            <div key={index} className="shadow">
              <img
                src={image}
                alt={`Property Image ${index + 1}`}
                className="rounded-lg w-full h-[50vh] object-fill"
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* Video Section */}
      <div className="flex-col md:flex-row gap-3 p-3 shadow">
      <div className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Property Tour</h2>
        {property_detail?.videoUrl ?<video
          controls
          className=" w-full md:w-2/3  rounded-lg border border-gray-300"
        >
          <source src={property_detail?.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>:<p className="text-gray-400">No  Video found... </p>}
          <p className="mt-4">{property_detail?.description}</p>
      </div>
      {/* Property Details */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Property Details</h2>
        <p className="text-gray-700 mb-4">
         {property_detail?.title}
        </p>
        <ul className="list-disc pl-5">
          <li>city:{property_detail?.city}</li>
          <li>Near:{property_detail?.landmark}</li>
          <li>Fully Furnished</li>
          <li>Price:${property_detail?.price}</li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
