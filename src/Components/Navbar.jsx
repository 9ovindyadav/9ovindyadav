import { Link } from "react-router-dom"
import "../scss/navbar.scss"    
import {BiMenuAltRight} from "react-icons/bi"  

export const Navbar = () => {
  return (
   <div className="navbar">
          <div className="brand">
                <h3><Link to={"/"}>Govind yadav</Link></h3>
          </div>
          <div className="menu">
           <Link to={"/"} className="link">Home</Link>
           <Link to={"/projects"}>Projects</Link>
           <Link to={"/blogs"}>Blogs</Link>
           <Link to={"/contact"}>Contact me</Link>
          </div>
          <h3 className="mobile"><BiMenuAltRight /></h3>
   </div>
  )
}