import {GrLinkedinOption} from "react-icons/gr"
import {BsGithub} from "react-icons/bs"
import {FaTelegramPlane, FaReact,FaHtml5, FaNodeJs, FaSass, FaGraduationCap} from "react-icons/fa"
import {SiJavascript, SiCss3, SiMongodb, SiFirebase} from "react-icons/si"
import {AiOutlineDownload} from "react-icons/ai"
import {MdWork, MdOutlineDateRange} from "react-icons/md";
import Photo from "../assets/govind.png"
import AboutPhoto from "../assets/about.jpg"
import Resume from "../assets/resume.pdf"
import "../scss/home.scss"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Home = () => {

  const navigate = useNavigate();

  const ContactMeButtonHandle = ()=>{
    navigate("/contact")
  }
  
  return (
    <>
    <div className="container area">
      <div className="intro">
        <div className="social">
          <a href="https://linkedin.com/in/govindsvyadav" target="_blank"><GrLinkedinOption /></a>
          <a href="https://github.com/9ovindyadav" target="_blank"><BsGithub /></a>
          <a href="https://t.me/govind1726" target="_blank"><FaTelegramPlane /></a>
        </div>

        <div className="text-intro">
          <h1>Hi, i am</h1><h1>Govind</h1>
          <h3>Web developer</h3>
          <p>I have a passion for building user friendly web apps that provide an enjoyable and seamless user experience</p>
          <button onClick={ContactMeButtonHandle}>Contact me</button>
        </div>
        <div className="image">
          <img src={Photo} alt="Govind" />
        </div>
      </div>

      <About />
      <Skills />
      <Qualification />
    </div>
   
    </>
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
            <p>I have 1 years of experience and a deep understanding of various web technologies such as HTML, CSS, JavaScript, TypeScript, MERN, React and NEXT.JS.
               I am dedicated to keeping up with the latest trends and techniques in web development, and I am constantly learning and expanding my skill set. I have a keen eye for detail and strive for perfection in every project I work on.
               When I'm not coding, I enjoy exploring new technologies and work on side projects. <br /> Outside of work, I enjoy traveling, hiking, and trying new things. Whether it's exploring a new city or trying a new hobby, I'm always eager to step out of my comfort zone and learn something new.
               <br />Overall, I believe that life is about the journey, not just the destination. I strive to live each day with purpose, curiosity, and a sense of adventure, and I'm excited to see where the journey takes me next."
            </p>
            <div className="expe">
              <div className="years">
              <h3>03+</h3>
              <p>Years experience</p>
              </div>
              <div className="years">
              <h3>05+</h3>
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


const Qualification = ()=>{

  const [show,setShow] = useState(1);
  return(
    <div className="qf">
      <h1>Qualification</h1>
      <p>My personal journey</p>
      <div className="data">
        <div className="btn">
        <button onClick={()=>setShow(1)}><MdWork /> Work</button>
        <button onClick={()=>setShow(2)}><FaGraduationCap /> Education</button>
        </div>
         <QualificationData show={show}/>
      </div>
    </div>
  )
}

function QualificationData({ show }) {
  return (
    <>
      {show === 1 && (
        <div className="work">
          <DataQueLeft position={"Sales Executive"} company={"Sterling Solutions"} year={"2019"} />
          <DataQueRight position={"DEO & Pro-coord"} company={"P5L"} year={"2020-2022"} />
          <DataQueLeftLast position={"Web developer"} company={"Sanskar Sarees"} year={"2022-2023"} />
        </div>
      )}
      {show === 2 && (
        <div className="education">
          <DataQueLeft position={"10th"} company={"Pal Rajendra"} year={"2014-2015"} />
          <DataQueRight position={"HSC, Science"} company={"Shree Raghuveer"} year={"2015-2017"} />
          <DataQueLeftLast position={"Btech"} company={"Gulzar group of institutes"} year={"2017-2020"} />
        </div>
      )}
    </>
  );
}

const DataQueLeft = ({position,company,year})=>{

  return(
    <div className="qua-data">
    <div className="data-1">
      <h3>{position}</h3>
      <p>{company}</p>
      <p className="year"><MdOutlineDateRange /> {year}</p>
    </div>
    <div className="middle">
    <div className="ball"></div>
    <div className="line"></div>
    </div>
    <div className="data-2">
    </div>
  </div>
  )
}

const DataQueRight = ({position,company,year})=>{

  return(
    <div className="qua-data">
    <div className="data-1">
      
    </div>
    <div className="middle">
    <div className="ball"></div>
    <div className="line"></div>
    </div>
    <div className="data-2">
    <h3>{position}</h3>
      <p>{company}</p>
      <p className="year"><MdOutlineDateRange /> {year}</p>
    </div>
  </div>
  )
}

const DataQueLeftLast = ({position,company,year})=>{

  return(
    <div className="qua-data">
    <div className="data-1">
      <h3>{position}</h3>
      <p>{company}</p>
      <p className="year"><MdOutlineDateRange /> {year}</p>
    </div>
    <div className="middle">
    <div className="ball"></div>
    </div>
    <div className="data-2">
    </div>
  </div>
  )
}

const DataQueRightLast = ({position,company,year})=>{

  return(
    <div className="qua-data">
    <div className="data-1">
      
    </div>
    <div className="middle">
    <div className="ball"></div>
    </div>
    <div className="data-2">
    <h3>{position}</h3>
      <p>{company}</p>
      <p className="year"><MdOutlineDateRange /> {year}</p>
    </div>
  </div>
  )
}