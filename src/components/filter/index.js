import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { requestProjectsFilter} from '../../actions/projectsFilterActions'
import { requestProjectsReset} from '../../actions/projectsResetActions'
import { requestProjectsSort} from '../../actions/projectsSortActions'

import './style.css'

class Filter extends React.Component {
  render() {
    return (
      <div className="filter-wrapper">
        <h1>Projects</h1>
        <div className="filter">
          <input type="text" value={this.props.description} onChange={this.filterProjects} placeholder="Enter description"/>
        </div>
        <button className={"sort " + this.getSortClassName()} onClick={this.sortProjects}>SORT</button>
        <button className="reset button" onClick={this.resetProjects}>RESET</button>
      </div>
    );
  }
  getSortClassName = () => {
    return this.props.sortingOrder + " sort button";
  }
  filterProjects = (event) => {
      this.props.requestProjectsFilter(event.target.value.toLowerCase(), "description", this.props.sortingOrder, this.props.sortField, this.props.projects);
  }
  sortProjects = (event) => {
      this.props.requestProjectsSort(this.props.description, this.props.sortingOrder, "project", this.getData());
  }
  getData = () => {
    return this.props.changed ? this.props.changedProjects : this.props.projects;
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
    sortField:state.displayProjectsReducer.sortField,
    changedProjects: state.displayProjectsReducer.changedProjects,
    changed:state.displayProjectsReducer.changed
  })

const mapDispatchToProps = dispatch => bindActionCreators({requestProjectsFilter, requestProjectsReset, requestProjectsSort}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
