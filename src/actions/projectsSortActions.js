export const REQUEST_PROJECTS_SORT = 'REQUEST_PROJECTS_SORT'
export const RECEIVE_PROJECTS_SORT = 'RECEIVE_PROJECTS_SORT'

export const requestProjectsSort = (sortingOrder, projects) => ({
  type: REQUEST_PROJECTS_SORT,
  sortingOrder,
  projects
})

export const receiveProjectsSort = (sortingOrder,sortedProjects) => ({
  type: RECEIVE_PROJECTS_SORT,
  sortingOrder,
  sortedProjects
})
