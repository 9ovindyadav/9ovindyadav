import {GrLinkedinOption} from "react-icons/gr"
import {BsGithub} from "react-icons/bs"
import {FaTelegramPlane, FaReact,FaHtml5, FaNodeJs, FaSass} from "react-icons/fa"
import {SiJavascript, SiCss3, SiMongodb, SiFirebase} from "react-icons/si"
import {AiOutlineDownload} from "react-icons/ai"
import Photo from "../assets/govind.png"
import AboutPhoto from "../assets/about.jpg"
import Resume from "../assets/resume.pdf"
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
      <Skills />
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
            <button onClick={()=>window.open(Resume)} className="btn">Download resume <AiOutlineDownload /></button>
          </div>
        </div>
      </div>
  )
}

const Skills = ()=>{
  return(
    <div className="skills">
      <h1>Skills</h1>
      <p>My tech stacks</p>
       <div className="tech">
        <div className="ski">
          <FaReact color="#14c1db" />
          <p>React</p>
        </div>
        <div className="ski">
          <FaHtml5 color="#e34f19"/>
          <p>HTML</p>
        </div>
        <div className="ski">
          <SiCss3 color="#19aae3"/>
          <p>CSS</p>
        </div>
        <div className="ski">
          <SiJavascript color="#e3c819"/>
          <p>JavaScript</p>
        </div>
        <div className="ski">
          <FaNodeJs color="#2e822e"/>
          <p>Node.js</p>
        </div>
        <div className="ski">
          <FaSass color="#d10d4e"/>
          <p>SASS</p>
        </div>
        <div className="ski">
          <SiMongodb color="#2f6624"/>
          <p>MongoDB</p>
        </div>
        <div className="ski">
          <SiFirebase color="#deb510"/>
          <p>Firebase</p>
        </div>
       </div>
    </div>
  )
}