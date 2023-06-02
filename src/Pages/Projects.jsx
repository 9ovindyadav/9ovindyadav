import "../scss/projects.scss"
import { projects } from "../assets/projects"


export const Projects = () => {
  return (
    <section>
      <h1>My Projects</h1>
      <div className="projects">
        {
          projects.map(({title,repo_url, live_url}) =>(
        
            <Project key={repo_url} title={title} repo_url={repo_url} live_url={live_url}/>
          ))
        }
      </div>
    </section>
  )
}

const Project = ({title,repo_url,live_url})=>{
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>Reposotpry : <a href={repo_url} target="blank">{repo_url ? "Link" : ""}</a></p>
      <p>Live Projects : <a href={live_url} target="blank">{live_url ? "Link" : ""}</a></p>
    </div>
  )
}