export const REQUEST_PROJECTS_SORT = 'REQUEST_PROJECTS_SORT'
export const RECEIVE_PROJECTS_SORT = 'RECEIVE_PROJECTS_SORT'

export const requestProjectsSort = (description, sortingOrder, sortField, changedProjects) => ({
  type: REQUEST_PROJECTS_SORT,
  description,
  sortingOrder,
  sortField,
  changedProjects
})

export const receiveProjectsSort = (description, sortingOrder, sortField, changedProjects) => ({
  type: RECEIVE_PROJECTS_SORT,
  description,
  sortingOrder,
  sortField,
  changedProjects
})
