import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { requestProjectsFilter} from '../../actions/projectsFilterActions'
import { requestProjectsReset} from '../../actions/projectsResetActions'

import './style.css'

class Filter extends React.Component {
  render() {
    return (
      <div className="filter-wrapper">
        <h1>Projects</h1>
        <div className="filter">
          <input type="text" value={this.props.description} onChange={this.filterProjects} placeholder="Enter description"/>
          <button onClick={this.resetProjects}>RESET</button>
        </div>
      </div>
    );
  }
  filterProjects = (event) => {
      this.props.requestProjectsFilter(event.target.value.toLowerCase(), "description", this.props.sortingOrder, this.props.sortField, this.props.projects);
  }
  resetProjects = (event) => {
    this.props.requestProjectsReset();
  }
}

const mapStateToProps = state => (
  {
    projects:state.projectsReducer,
    description:state.displayProjectsReducer.description,
    sortingOrder:state.displayProjectsReducer.sortingOrder,
    sortField:state.displayProjectsReducer.sortField
  })

const mapDispatchToProps = dispatch => bindActionCreators({requestProjectsFilter, requestProjectsReset}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
