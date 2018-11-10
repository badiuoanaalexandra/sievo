export const REQUEST_PROJECTS_FILTER = 'REQUEST_PROJECTS_FILTER'
export const RECEIVE_PROJECTS_FILTER = 'RECEIVE_PROJECTS_FILTER'

export const requestProjectsFilter = (description, descriptionField, sortingOrder, sortField, filterProjects) => ({
  type: REQUEST_PROJECTS_FILTER,
  description,
  descriptionField,
  sortingOrder,
  sortField,
  filterProjects
})

export const receiveProjectsFilter = (description, sortingOrder, sortField, changedProjects) => ({
  type: RECEIVE_PROJECTS_FILTER,
  description,
  sortingOrder,
  sortField,
  changedProjects
})
