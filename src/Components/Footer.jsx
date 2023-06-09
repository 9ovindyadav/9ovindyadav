import { Link } from "react-router-dom"
import {BsInstagram, BsYoutube, BsGithub, BsLinkedin} from "react-icons/bs"

import "../scss/footer.scss"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-1">
        <div className="foot-1">
          <h1>Govind</h1>
          <p>Web developer</p>
        </div>
        <div className="foot-2">
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/blogs"}>Blogs</Link>
          <Link to={"/contact"}>Contact me</Link>
        </div>
        <div className="foot-3">
          <a href="https://linkedin.com/in/govindsvyadav" target="_blank"><BsLinkedin /></a>
          <a href="https://github.com/9ovindyadav" target="_blank"><BsGithub /></a>
          <a href="https://www.instagram.com/9ovindyadav" target="_blank"><BsInstagram /></a>
          <a href="https://www.youtube.com/@9ovindyadav" target="_blank"><BsYoutube /></a>
        </div>
      </div>
      <p>&copy; Govind yadav. All rights reserved</p>
    </div>
  )
}