// we could have used also the react-table filter on the description column
//when there is a lot of data involved most likely the filtering happens by calling the api, so we could replace this with an api call
export const fetchFilteredProjects = async (description, descriptionField, projects) => {
  try{

    if (!description || description === "") return projects;

    const filteredProjects = projects.filter(p => p[descriptionField].toLowerCase().includes(description.toLowerCase()));
    return filteredProjects;
  }
  catch(e){
    console.log(e);
    return null;
  }
}
