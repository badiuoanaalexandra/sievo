export const REQUEST_PROJECTS_DATA = 'REQUEST_PROJECTS_DATA'
export const RECEIVE_PROJECTS_DATA = 'RECEIVE_PROJECTS_DATA'
export const ERROR_PROJECTS_DATA = 'ERROR_PROJECTS_DATA'

export const requestProjectsData = () => ({
  type: REQUEST_PROJECTS_DATA
})

export const receiveProjectsData = (projects) => ({
  type: RECEIVE_PROJECTS_DATA,
  projects
})
