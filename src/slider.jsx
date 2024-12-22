
import Card from './Card'


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';



function Slidersection() {
  

  
 
     const [Alldata,setAlldata]=useState([]) 
     const [error,seterror]=useState(null) 

      useEffect(()=>{
             const getallproperty=async()=>{
                     const properties= await axios.get("https://ujjwal-backend.onrender.com/api/allland");
                     setAlldata(properties.data)
             }

                getallproperty()
      },[])
 
        console.log(Alldata)
       
  const settings = {
    dots: false,
    arrow:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at once
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
     <div className=' '>
       
      {Alldata?.length >1 && <div className='max-w-[1400px] pb-7 mx-auto '>
        <h3 className='text-xl text-black   font-bold font-sans'> Our Best Deals</h3>
        <p className='mx-auto'>{error &&error}</p>
      
         <Slider {...settings} className=' mx-6'>
          {Alldata?.map((item,i)=><Card key={i} {...item}></Card>)}
          </Slider>
   
      </div>}
      </div>




  )
}

export default Slidersection

