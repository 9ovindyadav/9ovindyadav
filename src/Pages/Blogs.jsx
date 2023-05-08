import { blogs } from "../assets/blogs"
import "../scss/blogs.scss"

export const Blogs = () => {
  return (
    <section>
      <h1>My Blogs</h1>
      <div className="projects">
        {
          blogs.map(({title,url,author}) =>(
        
            <Blog title={title} url={url} author={author}/>
          ))
        }
      </div>
    </section>
  )
}

const Blog = ({title,url,author})=>{
  return (
    <div className="project">
      <a href={url} target="_blank"><h3>{title}</h3></a>
      <p>Author : {author}</p>
    </div>
  )
}