export const fetchProjects = async () => {
  try{
    const response = await fetch("https://sievo-react-assignment.azurewebsites.net/api/data")
    const projects = await response.json();
    return projects;
  }
  catch(e){
    console.log(e);
  }
}
