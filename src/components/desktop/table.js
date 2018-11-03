import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import ReactTable from "react-table";
import "react-table/react-table.css";


class ProjectTable extends React.Component {

  render() {
    const data = this.props.data;
    if(Object.keys(data).length === 0) return (
      <div>fetching data</div>
    )

    return (
      <div>
          <ReactTable
          data={data}
          columns={[
            {
              Header: "Projects",
              columns: [
                {
                  Header: "Project",
                  accessor: "project"
                },
                {
                  Header: "Description",
                  id: "description",
                  accessor: d => d.description
                },
                {
                  Header: "Category",
                  id: "category",
                  accessor: d => d.category
                }
              ]
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ data:state.dataReducer })

export default connect(mapStateToProps)(ProjectTable);
