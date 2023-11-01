import "./mobilenav.css";
import {Link} from 'react-router-dom'
import { GoHomeFill } from 'react-icons/go';
import { IoIosPeople } from 'react-icons/io';
import { HiSearch } from 'react-icons/hi';
import { BiSolidVideos } from 'react-icons/bi';
function mobilenav() {
  return (
    <>
    <div className="mobilenav">
            <Link to="/"><GoHomeFill />Home</Link>
            <Link to="/communities"><IoIosPeople />Community</Link>
            <Link to="/search"><HiSearch />Search</Link>
            <Link to="/courses"><BiSolidVideos />Courses</Link>
     </div>
     
     
    </>
  );
}

export default mobilenav;