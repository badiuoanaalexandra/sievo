export const fetchData = async () => {
  try{
    const response = await fetch("https://sievo-react-assignment.azurewebsites.net/api/data")
    const data = await response.json();
    return data;
  }
  catch(e){
    console.log(e);
  }
}
