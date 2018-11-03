import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { requestApiData} from './actions/apiActions'

import ProjectTable from './components/desktop/table';

class App extends React.Component {
  componentWillMount() {
    this.props.requestApiData();
  }
  render() {
    return (
      <div className="App">
          <ProjectTable />
      </div>
    );
  }
}

const mapStateToProps = state => ({ data:state.dataReducer })

const mapDispatchToProps = dispatch => bindActionCreators({requestApiData}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
