import Home from './Pages/Home/Home'
import {Announcements} from './Pages/Announcements/Announcements'
import Search from './Pages/Search/Search'
import Communities from '../RightSide/Communities'
import Courses from './Pages/Courses/Courses'
import {Routes,Route,Link} from 'react-router-dom'

import"./Mainnav.css";
 function Mainnav () {
  return (
    <>
      
      <div className="maincontent">
        <div className="mainnav">
            <Link to="/" >Posts</Link>
            <Link to="/announcements">Announcements</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/announcements" element={<Announcements/>}/>
          <Route path="/communities" element={<Communities/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/courses" element={<Courses/>}/>
        </Routes>
          
      </div>
    </>
      
            
    
  )
}

export default Mainnav