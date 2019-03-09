import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from '../ProjectItem/ProjectItem';
import Header from '../Header/Header';

class Project extends Component {
    // get set up
    componentDidMount() {
        this.getPort();
    }
    getPort() {
        this.props.dispatch({ type: 'GET_PORTFOLIO' })
    }
    // end get set up
  // Renders the entire app on the DOM
  render() {
    return (
    <div>
    <Header />
        <div className="App">
        <hr></hr>
        {this.props.reduxState.projects.map((object) => 
        <ProjectItem item={object}/>)}
        </div>
    </div>
    )
  }
}

const mapStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapStateToProps)(Project);