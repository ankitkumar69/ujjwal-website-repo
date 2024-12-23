
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

function card(item) {

  const settings = {
    arrow:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
   
  return (
       <Link to={`/propertydetail/${item._id}`}>
    <div className="max-w-[350px] bg-white shadow-lg rounded-lg overflow-hidden">
    {/* Image Slider */}
   { item?.ImgUrlArray?.length>0||item.videoUrl?<Slider {...settings}>
     {item?.ImgUrlArray?.length>0 &&( item?.ImgUrlArray?.map((item,index)=><img
         key={index}
        src={ item}
        alt={`Property${item} `}
        className="h-64 w-full object-fill"
      />))}
      
     {item?.videoUrl&& <video src={item.videoUrl} controls ></video>}
    </Slider>:<img src='./image/imghouse.png' className='h-64 w-full'></img>}

    {/* Property Details */}
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">
        {item?.title||"kya hai ye"}
      </h2>
      <p className="text-gray-600">
        {item?.address || "gaya tekari jalalpur"}
      </p>
      <div className="flex items-center mt-2">
        <span className="text-gray-800 font-semibold">
          ${item?.price || 999}
        </span>
      
      </div>
     
    </div>
  </div>
  </Link>
  )
}

export default card
