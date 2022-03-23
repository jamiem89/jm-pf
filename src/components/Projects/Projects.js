import React from 'react';
import './Projects.css';
import ProjectsData from './ProjectsData'
import Project from '../Project/Project'

function Projects(props) {

    const projectsEls = ProjectsData.map(proj => {
        return <Project key={proj.id} title={proj.title} excerpt={proj.excerpt} img={proj.img} link={proj.link}/>
    })

    return (<>
        <section className="projects">
            {projectsEls}
        </section>
    </>);
}

export default Projects;