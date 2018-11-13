import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { requestProjectsData} from '../../actions/projectsApiActions'
import { requestVwChange } from '../../actions/uiActions'

import "./style.css";
import backgroundDesktop from "../../assets/background-desktop.jpg"
import backgroundTablet from "../../assets/background-tablet.jpg"
import backgroundMobile from "../../assets/background-mobile.jpg"

import {tabletBreakpoint, mobileBreakpoint} from "../../helpers/ui"

import ProjectTable from '../table/index';
import Filter from '../filter/index';

class App extends React.Component {
  componentWillMount() {
    this.props.requestProjectsData();
    window.addEventListener("resize", this.props.requestVwChange);
  }
  render() {
    return (
      <div className="app">
        <div className="background-image-wrapper">
          <img alt="background" src={this.getBackgroundImage()}></img>
        </div>
        <div className="background-image-content">
          <Filter />
          <ProjectTable />
        </div>
      </div>
    );
  }

  getBackgroundImage = () => {
      let background = backgroundDesktop;
      if (this.props.viewportWidth > mobileBreakpoint && this.props.viewportWidth < tabletBreakpoint) {
        background = backgroundTablet;
      }
      else if (this.props.viewportWidth <= mobileBreakpoint) {
        background = backgroundMobile;
      }

      return background;
  }
}

const mapStateToProps = state => ({ viewportWidth:state.uiReducer})

const mapDispatchToProps = dispatch => bindActionCreators({requestProjectsData, requestVwChange}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
