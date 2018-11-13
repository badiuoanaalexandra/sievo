export const fetchSortedProjects = (sortingOrder, sortField, projects) => {
  try{

    if(!projects) return null;
    //we create a new array because we don't want to modify the original one. If we do, the changes will be reflected into the state as well
    let newProjects = projects.slice(0);

    switch (sortingOrder) {
      case "asc":
        return newProjects.sort(function(a, b){return a[sortField] - b[sortField]});
      case "desc":
        return newProjects.sort(function(a, b){return b[sortField] - a[sortField]});
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
      case "asc":
        return "desc";
      case "desc":
        return "asc";
      default:
        return "";
    }
  }

  catch(e){
    console.log(e);
    return "";
  }
}
