
import Card from './Card'


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
function slider() {
  const data = [

    {
      id: 99,
      price: "880",
      src:"/images/bigb2.avif",
      city: "Delhi",
      summary: "or bahi kya hall chal hain ghar kaise laga"
    },
    {
      id: 100,
      price: "100",
      src:"/images/bigb2.avif",
      city: "Delhi",
      summary: "or bahi kya hall chal hain ghar kaise laga"
    },
    {
      id: 101,
      price: "5000",
      src:"/images/bigb2.avif",
      city: "Delhi",
      summary: "or bahi kya hall chal hain ghar kaise laga"
    },
    {
      id: 102,
      price: "8000",
      src:"/images/bigb2.avif",
      city: "Delhi",
      summary: "or bahi kya hall chal hain ghar kaise laga"
    }, 
    {
      id: 103,
      price: "880",
      src:"/images/bigb2.avif",
      city: "Delhi",
      summary: "or bahi kya hall chal hain ghar kaise laga"

    }, 
    {
      id: 104,
      price: "880",
      src:"/images/bigb2.avif",
      city: "Delhi",
      summary: "or bahi kya hall chal hain ghar kaise laga"

    }, 
    
    {
      id: 105,
      price: "880",
      src:"/images/bigb2.avif",
      city: "Delhi",
      summary: "or bahi kya hall chal hain ghar kaise laga"

    }

  ]

  const settings = {
    dots: false,
    arrow:true,
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
      <div className='max-w-[1400px] mx-auto p-2'>
        <h3 className='text-xl text-black   font-bold font-sans'> Our Best Deals</h3>
      <Slider {...settings} >

       {data.map((item)=><Card key={item} {...item} />)}

      </Slider>
      </div>
      </div>




  )
}

export default slider

