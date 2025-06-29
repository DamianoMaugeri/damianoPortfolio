import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css"



function ProjectCard({element}){

   const {name, url , img, description} = element

    return <>
    <Link to={url}> 
    <div className="card h-100">
        <img src={`img/${img}`} className={` card-img-top ${styles.cardImg}`} alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
  </div>
</div>
    </Link>
    </>
}

export default ProjectCard;