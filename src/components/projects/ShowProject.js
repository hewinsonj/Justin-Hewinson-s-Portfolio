import React, { useEffect, useState } from "react"
import { Label, Icon, Item, Button, Segment, Grid, Comment, Form, Modal, Progress, Divider } from 'semantic-ui-react'
import { useNavigate, useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getProject, updateProject, deleteProject } from '../../api/project'
import UpdateProjectModal from "./UpdateProjectModal"
import ProjectForm from "../shared/ProjectForm"
import LoadingScreen from "../shared/LoadingPage"
import NoteForm from "../shared/NoteForm"
import CreateNote from "../notes/CreateNote"
import NotesModal from "../notes/NotesModal"



const ShowProject = ({ user, msgAlert }) => {
    const [project, setProject] = useState({})
    const [updated, setUpdated] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [percent, setPercent] = useState(null)
    const [percentChangeSaving, setPercentChangeSaving] = useState(false)
    const [showSaveButton, setShowSaveButton] = useState(false)
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false)
    const [noteModalShow, setNoteModalShow] = useState(false)
   

    const { projectId } = useParams()
    // const navigate = useNavigate()

    useEffect(() => {
      getProject(projectId)
        .then((res) => {
            setProject(res.data.project)
            setPercent(res.data.project.progress)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Show Projects failed' + error,
                variant: 'danger'
            })
        })
    },[updated])

    const handleDeleteProject = () => {
      deleteProject(user, projectId)
      .then(() => {
          setDeleted(true)
          msgAlert({
              heading: 'Success',
              message: 'Deleting a Project',
              variant: 'success'
          })
      })
      .then(() => {
        navigate(`/feed-page/${user._id}`)
      })
      .catch((error) => {
          msgAlert({
              heading: 'Failure',
              message: 'Deleting a Project Failure' + error,
              variant: 'danger'
          })
      })
  }

  const increaseProgress = (e) => {
    setPercent(prevPercent => {
        if (prevPercent >= 100) {
            msgAlert({
                heading:'Whoa There!',
                message: "You're already done!",
                variant: 'success'
            })
            return prevPercent
        } else {
            return Math.min(100, (prevPercent + 20))
        }
    })  
}

  const decreaseProgress = (e) => {
      setPercent(prevPercent => {
          if (prevPercent <= 0) {
              msgAlert({
                  heading:'Hey now',
                  message: "You can't do less than nothing! ",
                  variant: 'success'
              })
              return prevPercent
          } else {
              return Math.max(0, (prevPercent - 20))
          }
      })  
  }

const handleSaveProgress = (e) => {
    //set percentChangeSaving to true so that save button will show as loading
    setPercentChangeSaving(true)
    //make axios call
    project.progress = percent
    updateProject(user, project, project.id )
        //set 'saving' state to false so save button is no longer loading
        .then(() => {
          setPercentChangeSaving(false)
          setShowSaveButton(false)
        })
        .catch(error => {
            msgAlert({
                heading:'Something went wrong',
                message: "Update progress failed " + error,
                variant: 'danger'
            })
        })
}

//function to determine whether to show save button or not 
useEffect (()=> {
    setShowSaveButton((percent != project.progress))
}, [percent])




// if (deleted) navigate('/activities')
// const allActivitiesJSX = allActivities.map(activity => {

  if (!project) {
    return (
      <LoadingScreen />
    )
  }

  return(
    <>  
      <Segment    
          inverted color='yellow'
          verticalAlign='middle' 
          id="segment"
          
          // key={ activities.id }
      >
        <Segment>
          <Grid columns={2} padded>
            <Grid.Column verticalAlign="middle" >
              <h2>{project.projTitle} </h2>
            </Grid.Column>
            <Grid.Column verticalAlign="middle" textAlign="center"
              centered>
              <Progress 
                percent={percent} 
                indicating 
                verticalAlign='middle'
                centered
              />
                { 
                user && project.owner && user._id == project.owner._id
                ? 
                <>
                <Button onClick={decreaseProgress}  negative circular icon='minus'/>
                <Button onClick={increaseProgress} positive circular icon='plus'/>
                {
                    showSaveButton ?
                    <>
                        <Divider hidden />
                        <Button onClick={handleSaveProgress} loading={percentChangeSaving}>Save</Button>
                    </>
                    :
                    null
                }
                </>
                :
                null
                } 
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment inverted color='yellow' class="capitalize-me">
            <Grid centered stretched>
                <Grid.Row padded>
                    <Segment fluid>
                        <Grid columns={5}>
                            <Grid.Column>
                            {/* {
                            activity.owner 
                            ?
                            <h3>Activity Owner: 
                                <Link to={`/user-public-page/${activity.owner._id}`}> 
                                    <h2>{activity.owner.email}</h2>
                                </Link>
                            </h3>
                            : 
                            <h3>Activity Owner: 
                                <h3>None</h3>
                            </h3>
                            } */}

                            <h2>{project.img1}</h2>
                            <h2>{project.img2}</h2>
                            <h2>{project.img3}</h2>
                            </Grid.Column>
                            <Grid.Column>
                                <h3>Description: </h3>
                                <h3>{project.description}</h3>
                            </Grid.Column>
                            <Grid.Column>
                                <h3>finishDate: </h3>
                                <h3>{project.finishDate}</h3>
                                <h3>startDate: </h3>
                                <h3>{project.startDate}</h3>
                            </Grid.Column>
                            <Grid.Column>
                                <h3>Link1: </h3>
                                <h3>{project.link1}</h3>
                                <h3>Link2: </h3>
                                <h3>{project.link2}</h3>
                                <h3>Link3: </h3>
                                <h3>{project.link3}</h3>
                            </Grid.Column>
                            <Grid.Column>
                                <h3>Role: </h3>
                                <h3>{project.role}</h3>
                                <h3>Technologies: </h3>
                                <h3>{project.client}</h3>
                            </Grid.Column>

                        </Grid>
                        
                    </Segment>
                </Grid.Row>
            </Grid>
        </Segment>
        <Grid 
          padded 
          centered
          columns={4}
        >
          <Grid.Row>
            <Grid.Column>
            <Modal
              onClose={() => setNoteModalShow(false)}
              onOpen={() => setNoteModalShow(true)}
              open={noteModalShow}
              trigger={
                <Button size='large' variant="warning">Leave Feedback</Button>
              }
            >
					<Modal.Content>
            <Segment  
              padded='very'  
              inverted color='yellow' 
              verticalAlign='middle' 
              id="segment"
            >
                <CreateNote user={user} msgAlert={msgAlert} project={project} triggerRefresh={()=>setUpdated(prev => !prev)} setNoteModalShow={setNoteModalShow} />
            </ Segment>
            
            <Modal.Actions>
              <Button color='black' onClick={() => setNoteModalShow(false)}>
                Go Back
              </Button>
            </Modal.Actions>
					</Modal.Content>
        		</Modal>
             
            </Grid.Column>
            <Grid.Column>
              <NotesModal user={user} msgAlert={msgAlert} project={project} />
            </Grid.Column>
            <Grid.Column textAlign='middle'>
                  <UpdateProjectModal 
                    project={project}
                    user={user}
                    msgAlert={msgAlert}
                    triggerRefresh={()=>setUpdated(prev=>!prev)}
                    />
                    

          
            </Grid.Column>
            <Grid.Column  textAlign='middle'>

              <Button onClick={() => handleDeleteProject()} >Delete</Button>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  )
}

export default ShowProject