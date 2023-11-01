import  "./Header.css";
import { MdNotificationsNone } from 'react-icons/md';
import logo from "../assets/Logo.png";

function Header() {
  return (
    <>
    <div  >
         <ul className="headContainer">
          <li><img src={logo} style={{float:"left"}} alt="Logo" /><h3>Plutonn</h3></li>
          <li><h4>Posts</h4></li>
          <li><span><MdNotificationsNone size="1.8rem"/> </span>Profile</li>
         </ul>
        </div>
    </>
  );
}

export default Header;