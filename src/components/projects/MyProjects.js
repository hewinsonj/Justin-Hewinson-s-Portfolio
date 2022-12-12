import ProjectSegment from "./ProjectSegment"
import LoadingScreen from "../shared/LoadingPage"
import { Container } from "semantic-ui-react"


const MyProjects = ({allProjects, msgAlert, user, addProject}) => {


    const myProjectsJSX = allProjects ? 
    allProjects.map((project) => (
            <ProjectSegment 
            key={project.id} 
            project={project} 
            user={user} 
            msgAlert={msgAlert} 
            addProject={(type)=>addProject(type)}
            />
        ))
        :
        <LoadingScreen />

    return(
        <div className='scrolling-group'>
            {myProjectsJSX}
        </div>
    )
}

export default MyProjects