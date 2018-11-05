import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

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

        cols.push({
            Header: field.toUpperCase(),
            id:field.toLowerCase(),
            accessor: d => {
              if (d[field] === "NULL") return ""
              return field.includes('date') ? new Date(d[field]).toLocaleDateString("fi-FI") : d[field]
            }
          });
      }

      return cols;
  }
}

const mapStateToProps = state => ({
  projects:state.projectsReducer,
  filter:state.filteredProjectsReducer.filter,
  filteredProjects: state.filteredProjectsReducer.filteredProjects })

export default connect(mapStateToProps)(ProjectTable);
