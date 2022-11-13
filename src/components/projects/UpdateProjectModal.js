import React, { useState } from 'react'
import { Modal, Button } from 'semantic-ui-react'
import ProjectForm from '../shared/ProjectForm'
import { updateProject } from '../../api/project'

const UpdateProjectModal = (props) => {

    const {user, msgAlert, triggerRefresh} = props
    
    const [project, setProject] = useState(props.project)
    const [open, setOpen] = useState(false)

    const handleChange = (e , target) => {
        
        setProject(prevProject => {
            const { name, value } = target
            const updatedName = name
            let updatedValue = value
            // handle number type
            if(target.type === 'number') {
                // change from string to actual number
                updatedValue = parseInt(e.target.value)
            }

            //handle the checkbox
            if (updatedName === 'private' && target.checked) {
                updatedValue = true
            } else if (updatedName === 'private' && !target.checked) {
                updatedValue = false
            }

            const updatedProject = { [updatedName]: updatedValue }

            return { ...prevProject, ...updatedProject}
        })
    }

    const handleUpdateProject = (e) => {
        e.preventDefault()

        //close form if no change was made
        if (project == props.project) {
            setOpen(false)
        } else {
        updateProject(user, project, props.project._id)
            .then(() => {
                setOpen(false)
                triggerRefresh()
                msgAlert({
                    heading: 'Success',
                    message: 'Updated Project',
                    variant: 'success'
                })
            })
            .catch((error) => {
                setOpen(false)
                msgAlert({
                    heading: 'Failure',
                    message: 'Update Project Failure' + error,
                    variant: 'danger'
                })
            })
        }
    }

    return (
        <Modal
            onClose={() => {
                setOpen(false)
                setProject(props.project)
            }}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
                <Button onClick={()=>setProject(props.project)}>Update Project</Button>
            }
        >
            <Modal.Content>
                <ProjectForm 
                    user={user} 
                    msgAlert={msgAlert}  
                    project={project}
                    handleChange={handleChange}
                    handleSubmit={handleUpdateProject}
                    heading='Update Your Project'
                />
            </Modal.Content>
      </Modal>
    )
}

export default UpdateProjectModal

