import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { requestProjectsSort} from '../../actions/projectsSortActions'

import {tabletBreakpoint} from "../../helpers/ui"

import "./style.css";


class ProjectTable extends React.Component {
  render() {

    if(this.noDataExists()) return (
      <div className="project-table">
        <div className="no-projects">
          {this.getNoDataText()}
        </div>
      </div>
    )

    const data = this.getData();
    return (
      <div>
      <div className="project-table">
          {this.getHeaders()}
          {this.getRows(data)}
      </div>
    </div>
    );

  }

  noDataExists = () => {
    return (this.props.projects === null) ||
    (this.props.projects.length === 0) ||
    (this.props.changed && (!this.props.changedProjects || this.props.changedProjects.length === 0));
  }

  getNoDataText = () => {
    if (this.props.projects === null) return "Fetching data..."
    else if (this.props.projects.length === 0) return "There are no projects to fetch"
    else return "There are no projects to match the filter"
  }

  getData = () => {
    return this.props.changed ? this.props.changedProjects : this.props.projects;
  }

  sortProjects = (event) => {
      var fieldName = event.target.getAttribute("field");
      this.props.requestProjectsSort(this.props.description, this.props.sortingOrder, fieldName, this.getData());
  }

  getHeaders = () => {
    let headers = [];
    if (this.props.viewportWidth < tabletBreakpoint) return headers;

    const referenceProject = this.props.projects[0];
    //react gives error if no key is added
    let headerIndex = 0;
    for (let field in referenceProject){
        headers.push(field === "project"? (<div key={"header" + headerIndex} className="sort header-cell"><button className={"sort " + this.props.sortingOrder} field={field} onClick={this.sortProjects}>{field.toUpperCase()}</button></div>) :
        (<div key={"header" + headerIndex} className="header-cell">{field.toUpperCase()}</div>))
        headerIndex++;
    }

      return (<div>{headers}</div>);
  }

  getRows = (projects) => {
    return projects.map((project, index) => {
        return (<div key={"project" + index}>
            {this.getProjectRow(project)}
        </div>)
    })
  }

  getProjectRow = (project) => {
    let rows = [];
    let index = 0;
    for (let field in project){
        (this.props.viewportWidth < tabletBreakpoint) ?
        rows.push((<div key={"row" + index}>
        <div className="cell header-cell">{field.toUpperCase()}</div>
        <div className="cell">{this.getValue(field, project)}</div></div>)) :
        rows.push((<div key={"row" + index} className="cell">{this.getValue(field, project)}</div>))
        index++;
    }
    return rows;
  }

  getValue = (field, project) => {
      if (project[field] === "NULL") return "";
      if (field.includes('date')){
          return new Date(project[field]).toLocaleDateString("fi-FI")
      }

      if (typeof project[field] === "number"){
        return project[field].toLocaleString('fi-FI');
      }
      return  project[field];
     }

}

const mapStateToProps = state => ({
  projects:state.projectsReducer,
  changed:state.displayProjectsReducer.changed,
  description:state.displayProjectsReducer.description,
  sortingOrder:state.displayProjectsReducer.sortingOrder,
  sortField:state.displayProjectsReducer.sortField,
  changedProjects: state.displayProjectsReducer.changedProjects,
  viewportWidth:state.uiReducer })

const mapDispatchToProps = dispatch => bindActionCreators({requestProjectsSort}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTable);
