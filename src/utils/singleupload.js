
import  Axios  from 'axios';



  
const singlePicUpload=async(image)=>{

   const data = new FormData()
   data.append("file",image);      //first is file field and second can be image or video
    data.append("upload_preset","property");  // first one is field second one is value that is preset that we created in cloudinary

        try{

        const res= await Axios.post("https://api.cloudinary.com/v1_1/dya0b1q5c/image/upload",data)    //v1_1/cloudname/filetype/upload

         const{url}=res.data
          console.log(url)
         return url

        }catch(err){
            console.log(err)
        }

      
    }

 
    

export default singlePicUpload
