export const REQUEST_PROJECTS_FILTER = 'REQUEST_PROJECTS_FILTER'
export const RECEIVE_PROJECTS_FILTER = 'RECEIVE_PROJECTS_FILTER'

export const requestProjectsFilter = (description, projects) => ({
  type: REQUEST_PROJECTS_FILTER,
  description,
  projects
})

export const receiveProjectsFilter = (filteredProjects) => ({
  type: RECEIVE_PROJECTS_FILTER,
  filteredProjects
})
