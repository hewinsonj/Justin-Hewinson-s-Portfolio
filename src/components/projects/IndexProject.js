import React, { useEffect, useState } from "react";
import { Icon, Item, Button, Grid, Comment, Form, Modal, Search, Header, Segment} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getAllProjects } from '../../api/project'
// import { act } from "react-dom/test-utils";
// import SearchBar from "../SearchBar/Search";




const IndexProject = ({ user, msgAlert }) => {
    //set state for all public activities, filtered activities based on search
    const [allProjects, setAllProjects] = useState([])
    const [filterProjects, setFilterProjects] = useState([])
    const [searchText, setSearchText] = useState([])

    //function for filtering as user types in activity name
    const handleChange = (e) => {
        let projects = allProjects
        setFilterProjects(projects.filter(
        a => a.client.includes(e.target.value))
        )
    }
    
    useEffect(() => {
        getAllProjects(user)
        .then(res => {
            setAllProjects(res.data.projects)
            setFilterProjects(res.data.projects)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Projects failed' + error,
                variant: 'danger'
            })
        })
    },[])

    // const allActivitiesJSX = allActivities.map(activity => {
    //     return (
    //         <Link to={`/activities/${activity._id}`} key={activity._id}>
    //             <li>
    //             activity: {activity.name} accessibility: {activity.accessibility} 
    //             type: {activity.type} participants: {activity.participants} 
    //             price: {activity.price} progress: {activity.progress} 
    //             </li>
    //         </Link>
    //     )
    // })

    const Index = filterProjects.map(projects => (
        <Segment key={ projects.id } inverted class="capitalize-me">
            <Grid centered stretched>
                <Grid.Row padded>
                    <h1>{projects.projTitle}</h1>
                    <Segment fluid>
                        <Grid columns={5}>
                            <Grid.Column>
                            {/* {
                            projects.owner 
                            ?
                            <h3>Activity Owner: 
                                <Link to={`/user-public-page/${activities.owner._id}`}> 
                                    <h2>{activities.owner.email}</h2>
                                </Link>
                            </h3>
                            : 
                            <h3>Activity Owner: 
                                <h3>None</h3>
                            </h3>
                            } */}
                            <h3>Img1: </h3>
                            <h3>{projects.img1}</h3>
                            <h3>Img2: </h3>
                            <h3>{projects.img2}</h3>
                            <h3>Img3: </h3>
                            <h3>{projects.img3}</h3>
                            
                            </Grid.Column>
                            <Grid.Column>
                                <h3>Description: </h3>
                                <h3>{projects.description}</h3>
                            </Grid.Column>
                            <Grid.Column>
                                <h3>StartDate: </h3>
                                <h3>{projects.startDate}</h3>
                                <h3>FinishDate: </h3>
                                <h3>{projects.finishDate}</h3>
                            </Grid.Column>
                            <Grid.Column>
                            <h3>link1: </h3>
                            <h3>{projects.link1}</h3>
                            <h3>link2: </h3>
                            <h3>{projects.link2}</h3>
                            <h3>link3: </h3>
                            <h3>{projects.link3}</h3>
                            </Grid.Column>
                            <Grid.Column>
                                <h3>Role: </h3>
                                <h3>{projects.role}</h3>
                                <h3>Client: </h3>
                                <h3>{projects.client}</h3>
                            </Grid.Column>

                        </Grid>
                        
                    </Segment>
                </Grid.Row>
            </Grid>
        </Segment>
    ))

    

return (
    <>
        <Segment inverted class="capitalize-me">
            <Grid centered stretched>
                <Grid.Row padded>
                        
                        <h1>All Projects</h1>
                        <h2>Check out my work </h2>
                        <div className="headerSearch">
                    {/* <form className="searchForm" >
                        <input className="headerSearchInput" type="text" onChange={handleChange} />
                        <input type="submit" value="Search"></input>
                    </form> */}

                    <Form >
                        <Form.Input
                            placeholder='Type  here  to  filter  results  by  language'
                            onChange={handleChange}
                            >
                            
                        </Form.Input>
                    </Form>
                    </div>
                      
                </Grid.Row>
            </Grid>
        </Segment>
        
        {Index}
    </>
)


}

export default IndexProject