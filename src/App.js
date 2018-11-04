import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { requestProjectsData} from './actions/projectsApiActions'

import ProjectTable from './components/table/index';
import Filter from './components/filter/index';

class App extends React.Component {
  componentWillMount() {
    this.props.requestProjectsData();
  }
  render() {
    return (
      <div className="App">
          <Filter />
          <ProjectTable />
      </div>
    );
  }
}

const mapStateToProps = state => ({ data:state.dataReducer })

const mapDispatchToProps = dispatch => bindActionCreators({requestProjectsData}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
