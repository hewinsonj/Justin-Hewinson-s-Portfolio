import apiUrl from '../apiConfig'
import axios from 'axios'



// USING API FOR HOME PAGE FEED!
// export const HomeFeed = (user) => {
// 	return axios({
// 		method: 'GET',
// 		url: apiUrl + '/'
// 	})
// }

//get all projects (unless marked private)
//data returned: res.data.projects will have all public projects 
export const getAllProjects = () => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/projects`
    })
}
// For Search Bar to filter all Projects
export const searchProjects = (searchText) => { 
    return axios({ 
        method: 'POST', 
        url: `${apiUrl}/projects`, 
        data: searchText 
        })
    }

//get the logged-in user's activities
//data returned: res.data.activities has all of the user's activities
//res.data.completedCounts is an object w/ the number of completed activities per category (ex: res.data.completedCounts.eduction will be 2 if the user has completed 2 activities)
export const getMyProjects = (user) => {
    return axios({
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        url: `${apiUrl}/projects/mine`
    })
}

//get a user's public activities
//data returned: res.data.activities has all of the requested user's public activities
//res.data.completedCounts is an object w/ the number of completed activities per category (ex: res.data.completedCounts.eduction will be 2 if the user has completed 2 activities)
export const getTheirProjects = (currentUser, requestedUserId) => {
    return axios({
        method: 'GET',
        headers: {
            Authorization: `Token token=${currentUser.token}`
        },
        url: `${apiUrl}/projects/user/${requestedUserId}`
    })
}

//get a single activity 
//data returned: res.data.activity is the activity object itself (including all notes as res.data.notes)
//res.data.publicNotes has all notes associated with the activity which have been marked a private by their authors 
//res.data.privateViewableNotes has all notes in the activity which have been marked private BUT which were authored by the current user making the request
export const getProject = (projectId) => {
    return axios({
        method: 'GET',
        url: `${apiUrl}/projects/${projectId}`
    })
}
//create an activity 
//data returned: res.data.activity will be the new activity 
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

// GET a single random activity
// export const randomActivity = (user) => {
//     return axios({
//         method: 'GET',
//         headers: {
//             Authorization: `Token token=${user.token}`
//         },
//         url: apiUrl + '/random'
//     })
// }

//update an activity
//nothing returned
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

//delete an activity
//nothing returned 
export const deleteProject = (user, projectId) => {
	return axios({
		method: 'DELETE',
        headers: {
			Authorization: `Token token=${user.token}`,
		},
		url: `${apiUrl}/projects/${projectId}`
	})
}


