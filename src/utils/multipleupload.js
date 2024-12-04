

import  Axios  from 'axios';



  
const multiuploadfile=async(multiplefile)=>{

     const URL=[]
    for (let i = 0; i < multiplefile.length; i++) {
      const data = new FormData()
        data.append('file', multiplefile[i]);
        data.append("upload_preset","property");
              
         


         try{

       const res= await Axios.post("https://api.cloudinary.com/v1_1/dya0b1q5c/image/upload",data)    //v1_1/cloudname/filetype/upload
        const {url}=res.data
              URL.push(url)
        
         }catch(err){
             console.log(err)
         }

        }

        return URL
     }




export default multiuploadfile;
