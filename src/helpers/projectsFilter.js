// we could have used also the react-table filter on the description column
//when there is a lot of data involved most likely the filtering happens by calling the api, so we could replace this with an api call 
export const fetchFilteredProjects = async (description, projects) => {
  try{
    const filteredProjects = projects.filter(p => p.description.toLowerCase().includes(description));
    return filteredProjects;
  }
  catch(e){
    console.log(e);
    return null;
  }
}
