import { Link } from "react-router-dom"
import "../scss/navbar.scss"      

export const Navbar = () => {
  return (
   <div className="navbar">
          <div className="brand">
                <h3>Govind yadav</h3>
          </div>
          <div className="menu">
           <Link to={"/"}>Home</Link>
           <Link to={"/projects"}>Projects</Link>
           <Link to={"/blogs"}>Blogs</Link>
           <Link to={"/about"}>About</Link>
          </div>
          <h3 className="mobile">Menu</h3>
   </div>
  )
}