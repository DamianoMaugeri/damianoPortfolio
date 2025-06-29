import { Link } from "react-router-dom"
import ProjectCard from "../projectCard/ProjectCard"


const projects =[
    {name:'Spotify Web', url:'/', img:'spotify.JPG', description:'descrizione breve'},
    {name:'Boolean B&B', url:'/', img:'boolbnb.JPG', description:'descrizione breve'},
    {name:'Laravel Movies', url:'/', img:'laravelmovies.JPG', description:'descrizione breve'}
]



function Works(){


    return <>

    <main className="container my-5">

        <section className="title text-center mb-5">
            <h2>Alcuni dei miei lavori</h2>
            
        </section>

        <section className="works">

            <div className="row">
                {projects.map((project, i) => (
                    
                <div className="col-4" key={i}>
                    <ProjectCard element={project} />
                    
                </div>

                ))}

            </div>



        </section>





    </main>



    </>



}

export default Works