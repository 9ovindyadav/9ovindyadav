import {GrLinkedinOption} from "react-icons/gr"
import {BsGithub} from "react-icons/bs"
import {FaTelegramPlane} from "react-icons/fa"
import Photo from "../assets/govind.png"
import "../scss/home.scss"

export const Home = () => {
  return (
    <div className="container">
      <div className="intro">
        <div className="social">
          <a href=""><GrLinkedinOption /></a>
          <a href=""><BsGithub /></a>
          <a href=""><FaTelegramPlane /></a>
        </div>

        <div className="text-intro">
          <h1>Hi, i am</h1><h1>Govind</h1>
          <h3>Web developer</h3>
          <p>I have a passion for building user friendly web apps that provide an enjoyable and seamless user experience</p>
          <button>Contact me</button>
        </div>
        <div className="image">
          <img src={Photo} alt="Govind" />
        </div>
      </div>
    </div>
  )
}