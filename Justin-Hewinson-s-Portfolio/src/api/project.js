// import apiUrl from '../apiConfig'
// import axios from 'axios'

// //get all projects 
// export const getAllProjects = () => {
//     return axios({
//         method: 'GET',
//         url: `${apiUrl}/projects`
//     })
// }

// //get a single project
// export const getProject = (projectId) => {
//     return axios({
//         method: 'GET',
//         url: `${apiUrl}/projects/${projectId}`
//     })
// }

// //create a Project
// export const createProject = (user, newProject) => {
//     return axios({
//         method: 'POST',
//         headers: {
//             Authorization: `Token token=${user.token}`
//         },
//         url: apiUrl + '/projects',
//         data: {
//             project: newProject
//         }
//     })
// }

// //update a project
// export const updateProject = (user, updatesToProject, projectId) => {
// 	return axios({
// 		method: 'PATCH',
//         headers: {
// 			Authorization: `Token token=${user.token}`,
// 		},
// 		url: `${apiUrl}/projects/${projectId}`,
// 		data: {
// 			project: updatesToProject
// 		}
// 	})
// }

// //delete a project
// export const deleteProject = (user, projectId) => {
// 	return axios({
// 		method: 'DELETE',
//         headers: {
// 			Authorization: `Token token=${user.token}`,
// 		},
// 		url: `${apiUrl}/projects/${projectId}`
// 	})
// }



// Static front-end data source (no backend)

const fetchAll = async () => {
  const res = await fetch('/projects.json', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load projects.json');
  return res.json();
};

// get all projects
export const getAllProjects = async () => {
  const projects = await fetchAll();
  // sort by priority a→f (a highest)
  const rank = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
  projects.sort((p, q) => (rank[p.priority] || 999) - (rank[q.priority] || 999));
  return { data: { projects } };
};

// get a single project
export const getProject = async (projectId) => {
  const projects = await fetchAll();
  const project = projects.find(p => String(p.id) === String(projectId));
  return { data: { project } };
};

// Mutations are disabled in static mode. Keep exported names for compatibility.
export const createProject = async () => {
  throw new Error('createProject is disabled in static mode');
};
export const updateProject = async () => {
  throw new Error('updateProject is disabled in static mode');
};
export const deleteProject = async () => {
  throw new Error('deleteProject is disabled in static mode');
};
