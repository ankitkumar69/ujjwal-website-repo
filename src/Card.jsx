


import Slider from 'react-slick';


function card(item) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const property = [...item.ImgUrlArray];

  return (
 
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    {/* Image Slider */}
    <Slider {...settings}>
      {property.map((item,index)=><img
         key={index}
        src={"./image/imghouse.png"}
        alt={`Property `}
        className="h-64 w-full object-cover"
      />)}
      
      <video src='./video/video.mkv' controls ></video>
    </Slider>

    {/* Property Details */}
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">
        {item?.title||"title"}
      </h2>
      <p className="text-gray-600">
        {item?.address || "gaya tekari jalalpur"}
      </p>
      <div className="flex items-center mt-2">
        <span className="text-gray-800 font-semibold">
          ${item?.price || 999}
        </span>
        <span className="ml-2 text-sm text-gray-600">/month</span>
      </div>
      {/* <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
        View Details
      </button> */}
    </div>
  </div>

  )
}

export default card
