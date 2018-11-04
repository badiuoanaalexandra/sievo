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
