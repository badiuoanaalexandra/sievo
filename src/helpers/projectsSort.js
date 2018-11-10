export const fetchSortedProjects = (sortingOrder, sortField, projects) => {
  try{

    if(!projects) return null;
    //we create a new array because we don't want to modify the original one. If we do, the changes will be reflected into the state as well
    let newProjects = projects.slice(0);

    switch (sortingOrder) {
      case "asc":
        return newProjects.sort(function(a, b){return a[sortField] - b[sortField]});
        break;
      case "desc":
        return newProjects.sort(function(a, b){return b[sortField] - a[sortField]});
        break;
      default:
        return newProjects;
    }
  }
  catch(e){
    console.log(e);
    return null;
  }
}

export const getNewSortingOrder = (sortingOrder) => {
  try {
    switch (sortingOrder) {
      case "":
        return "asc";
        break;
      case "asc":
        return "desc";
        break;
      case "desc":
        return "asc";
        break;
      default:
        return "";
    }
  }

  catch(e){
    console.log(e);
    return "";
  }
}
