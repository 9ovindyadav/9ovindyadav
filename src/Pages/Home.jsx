import {GrLinkedinOption} from "react-icons/gr"
import {BsGithub} from "react-icons/bs"
import {FaTelegramPlane} from "react-icons/fa"
import {AiOutlineDownload} from "react-icons/ai"
import Photo from "../assets/govind.png"
import AboutPhoto from "../assets/about.jpg"
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

      <About />
    </div>
  )
}

const About = ()=>{
  return (
    <div className="about">
        <h1>About me</h1>
        <p className="my-intro">my Introduction</p>
        <div className="main">
          <img src={AboutPhoto} alt="" />
          <div className="text">
            <p>I have 7.5 years of experience and a deep understanding of various web technologies such as HTML, CSS, JavaScript, TypeScript, Angular, MEAN, Vue.js, and React.
               I am dedicated to keeping up with the latest trends and techniques in web development, and I am constantly learning and expanding my skill set. I have a keen eye for detail and strive for perfection in every project I work on.
               When I'm not coding, I enjoy exploring new technologies and work on side projects. I am a sports enthusiast. I play basketball and go to practice regularly. I am also a big football fan and my favourite club is Arsenal.
            </p>
            <div className="expe">
              <div className="years">
              <h3>7.5+</h3>
              <p>Years experience</p>
              </div>
              <div className="years">
              <h3>20+</h3>
              <p>Projects Completed</p>
              </div>
              <div className="years">
              <h3>04+</h3>
              <p>Companies worked</p>
              </div>
            </div>
            <button className="btn">Download resume <AiOutlineDownload /></button>
          </div>
        </div>
      </div>
  )
}