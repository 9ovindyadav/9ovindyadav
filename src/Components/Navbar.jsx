import { Link } from "react-router-dom"
import "../scss/navbar.scss"    
import {BiMenuAltRight} from "react-icons/bi"  
import { useState } from "react"

export const Navbar = () => {

  const [menu,setMenu] = useState(false) ;
  const MenuHandler = ()=>{

    setMenu(true);
    if(menu){
      setMenu(false);
    }
  }
  return (
   <div className="navbar">
          <div className="brand">
                <h3><Link to={"/"}>Govind yadav</Link></h3>
          </div>
          <div className="menu">
           <Link to={"/"}>Home</Link>
           <Link to={"/projects"}>Projects</Link>
           <Link to={"/blogs"}>Blogs</Link>
           <Link to={"/social"}>Social</Link>
           <Link to={"/contact"}>Contact me</Link>
          </div>
         <div className="mobile">
         <h3><BiMenuAltRight onClick={MenuHandler} /></h3>
           <MobileMenu menu={menu} setMenu={setMenu}/>
         </div>
   </div>
  )
}

const MobileMenu = ({menu,setMenu})=>{
  return(
    <>
    {
      menu ? (<div className="mobile-menu">
      <Link to={"/"} onClick={()=>setMenu(false)}>Home</Link>
      <Link to={"/projects"} onClick={()=>setMenu(false)}>Projects</Link>
      <Link to={"/blogs"} onClick={()=>setMenu(false)}>Blogs</Link>
      <Link to={"/social"} onClick={()=>setMenu(false)}>Social</Link>
      <Link to={"/contact"} onClick={()=>setMenu(false)}>Contact me</Link>
     </div>) : null
    }
    </>
  )
}