import {FiPhoneCall} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";
import {GoLocation} from "react-icons/go";

import "../scss/contact.scss"


const details = [
  {
    logo : <FiPhoneCall/>,
    title : "Call me",
    info : "+91 9370497420"
  },
  {
    logo : <HiOutlineMail/>,
    title : "Email",
    info : "govindsvyadav@gmail.com"
  },
  {
    logo : <GoLocation/>,
    title : "Location",
    info : "Mumbai, India."
  }
]

export const Contact = () => {
  return (
    <section>
      <h1>Contact me</h1>
      <p>Get in touch</p>
      <div className="details-group">
        {
          details.map(({logo,title,info})=>(
            <Detail title={title} logo={logo} info={info}/>
          ))
        }
      </div>
    </section>
  )
}

const Detail = ({logo,title,info})=>{
  return(
    <div className="detail">
          {logo}
          <div className="text">
            <h1>{title}</h1>
            <p>{info}</p>
          </div>
    </div>
  )
}