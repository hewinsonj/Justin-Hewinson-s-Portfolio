import ProjectSegment from "./ProjectSegment"
import LoadingScreen from "../shared/LoadingPage"
import { Container } from "semantic-ui-react"


const MyProjects = ({allMyProjects, msgAlert, user, addProject}) => {


    const myProjectsJSX = allMyProjects ? 
    allMyProjects.map((project) => (
            <ProjectSegment 
            key={project.id} 
            project={project} 
            user={user} 
            msgAlert={msgAlert} 
            mine={true} 
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