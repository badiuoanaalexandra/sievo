import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { requestProjectsFilter} from '../../actions/projectsFilterActions'

class Filter extends React.Component {
  render() {
    return (
      <div>
        <input type="text" onChange={this.filterProjects} ref="descriptionFilter" placeholder="Enter description"/>
        <button onClick={this.filterProjects}>Search projects</button>
      </div>
    );
  }
  filterProjects = (event) => {
      this.props.requestProjectsFilter(event.target.value.toLowerCase(), this.props.projects);
  }
}

const mapStateToProps = state => ({ projects:state.projectsReducer })

const mapDispatchToProps = dispatch => bindActionCreators({requestProjectsFilter}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
