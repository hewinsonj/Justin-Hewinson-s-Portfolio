import ProjectSegment from "./ProjectSegment"
import LoadingScreen from "../shared/LoadingPage"
import { Container, Form } from "semantic-ui-react"


const MyProjects = ({allProjects, filterProjects, msgAlert, user, addProject, handleChange}) => {


    const myProjectsJSX = allProjects ? 
    filterProjects.map((project) => (
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
        <div >
             <Form>
                <Form.Input
                    placeholder='Type  here  to  filter  results  by  languages'
                    onChange={handleChange}
                    
                    >
                    
                </Form.Input>
            </Form>
            {myProjectsJSX}
        </div>
    )
}

export default MyProjects