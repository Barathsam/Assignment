import "./NavBar.css";
import {Link} from 'react-router-dom'
import { GoHomeFill } from 'react-icons/go';
import { IoIosPeople } from 'react-icons/io';
import { HiSearch } from 'react-icons/hi';
import { BiSolidVideos } from 'react-icons/bi';
function Navbar() {
  return (
    <>
          <div className="navbar">
            <Link to="/"><GoHomeFill size="1.7rem"/> Home</Link>
            <Link to="/communities"><IoIosPeople size="1.7rem"/> Community</Link>
            <Link to="/search"><HiSearch size="1.7rem"/> Search</Link>
            <Link to="/courses"><BiSolidVideos size="1.7rem"/> Courses</Link>
     </div>
     
     
    </>
  );
}

export default Navbar;