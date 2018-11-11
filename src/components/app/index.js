import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { requestProjectsData} from '../../actions/projectsApiActions'

import "./style.css";
import background from "../../assets/background.jpg"

import ProjectTable from '../table/index';
import Filter from '../filter/index';

class App extends React.Component {
  componentWillMount() {
    this.props.requestProjectsData();
  }
  render() {
    return (
      <div className="app">
        <div className="background-image-wrapper">
          <img src={background}></img>
        </div>
        <div className="background-image-content">
          <Filter />
          <ProjectTable />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ data:state.dataReducer })

const mapDispatchToProps = dispatch => bindActionCreators({requestProjectsData}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
