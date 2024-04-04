import ProjectSegment from "./ProjectSegment"
import LoadingScreen from "../shared/LoadingPage"
import {
  Menu,
  Icon,
  Sticky,
  Modal,
  Button,
  Checkbox,
  Grid,
  Image,
  Segment,
  Sidebar,
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
  MenuMenu,
  Dropdown,
    MenuItem,
    Form,
    Container,
    List,

  
} from "semantic-ui-react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";


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

    return (
      <div>
        <Form raised>
          <Form.Input
            placeholder="Type  here  to  filter  results  by  coding languages and technologies"
            onChange={handleChange}
            size="big"
          ></Form.Input>
        </Form>
        {myProjectsJSX}

        {/* --------------------------------------------------------------- */}

       
      </div>
    );
}

export default MyProjects