import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import "./style.css";

import ReactTable from "react-table";
import "react-table/react-table.css";

class ProjectTable extends React.Component {
  render() {

    if(this.props.projects === null) return (
      <div>fetching data</div>
    )

    if(this.props.projects.length === 0) return (
      <div>There are no projects</div>
    )

    const data = this.getData();
    return (
      <div>
      <div className="project-table">
          {this.getHeaders()}
          {this.getRows(data)}
      </div>

      <div>
          <ReactTable
          data={this.getData()}
          showPagination={false}
          defaultPageSize={data.length}
          columns={[
            {
              Header: "Projects",
              columns: this.getColumns()
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    </div>
    );

  }

  getData = () => {
    return this.props.filter ? this.props.filteredProjects : this.props.projects;
  }

  //we will use the fields of the first project to build our columns
  //other way to do this is to just add columns "manually", but every time a new column is added to the API we would need to also add it here
  //to avoid extra work we will just build our columns dynamically
  //assumption is that if the field name has "Date" it's date type, if it cannot convert it to a date, it just returns the string - other way to do this is probably use some regex
  getColumns = () => {
    const referenceProject = this.props.projects[0];
      let cols = [];

      for (let field in referenceProject){
        const isDate = field.includes('date');
        let columnConfig = {
            Header: field.toUpperCase(),
            id:field.toLowerCase(),
            accessor: d => {
              if (d[field] === "NULL") return ""
              return field.includes('date') ? new Date(d[field]).toLocaleDateString("fi-FI") : d[field]
            }
          }

        cols.push(columnConfig);
      }

      return cols;
  }

  getHeaders = () => {
    const referenceProject = this.props.projects[0];
    let headers = [];

    for (let field in referenceProject){
        headers.push(field === "project"? (<div><a>{field.toUpperCase()}</a></div>) : (<div>{field.toUpperCase()}</div>))
    }

      return (<div>{headers}</div>);
  }

  getRows = (projects) => {
    return projects.map((project, index) => {
        return (<div key={index}>
            {this.getProjectRow(project)}
        </div>)
    })
  }

  getProjectRow = (project) => {
    let rows = [];
    for (let field in project){
        rows.push((<div>{this.getValue(field, project)}</div>))
    }
    return rows;
  }

  getValue = (field, project) => {
      if (project[field] === "NULL") return "";
      if (field.includes('date')){
          return new Date(project[field]).toLocaleDateString("fi-FI")
      }
      return  project[field];
     }

}

const mapStateToProps = state => ({
  projects:state.projectsReducer,
  filter:state.filteredProjectsReducer.filter,
  filteredProjects: state.filteredProjectsReducer.filteredProjects })

export default connect(mapStateToProps)(ProjectTable);
