import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope,} from "react-icons/fa";

function Info() {
  return (
    <div className="bg-gray-500 md:flex justify-around p-2" >
      <span className="flex text-white"><span className="mx-2"><FaPhone></FaPhone></span>7707031729</span>
      <Link to={"mailto:akumar@gmail.com"}><span className="flex text-white"><span className="mx-2"><FaEnvelope></FaEnvelope></span>akumar46360@gmail.com</span></Link>
      <span className="flex text-white">Schedule a Call</span>
    </div>
  )
}

export default Info
