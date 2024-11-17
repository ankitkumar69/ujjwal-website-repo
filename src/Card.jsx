

import {Link} from "react-router-dom" 

function card(item) {
           console.log(item)
  return (
    < >
    <Link to={`/carddetail/${item._id}`} className=''>
    <div className=''>
    <img src={item.image||"./image/Google-Logo.png"} alt=''></img>
    <div className=''>
           <span> {item.propertyname} </span>
           <span>price:$ {item.price} </span>
   <p> {item.description}</p>
</div>
    </div>
    </Link> 
     
     
      
    </>
  )
}

export default card
