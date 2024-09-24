import apiUrl from '../apiConfig'
import axios from 'axios'

//get all projects 
export const getAllProjects = () => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/projects`
    })
}

//get a single project
export const getProject = (projectId) => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/projects/${projectId}`
    })
}

//create a Project
export const createProject = (user, newProject) => {
    return axios({
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        url: apiUrl + '/projects',
        data: {
            project: newProject
        }
    })
}

//update a project
export const updateProject = (user, updatesToProject, projectId) => {
	return axios({
		method: 'PATCH',
        headers: {
			Authorization: `Token token=${user.token}`,
		},
		url: `${apiUrl}/projects/${projectId}`,
		data: {
			project: updatesToProject
		}
	})
}

//delete a project
export const deleteProject = (user, projectId) => {
	return axios({
		method: 'DELETE',
        headers: {
			Authorization: `Token token=${user.token}`,
		},
		url: `${apiUrl}/projects/${projectId}`
	})
}


