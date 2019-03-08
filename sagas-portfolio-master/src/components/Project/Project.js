import React, { Component } from 'react';
import { connect } from 'react-redux';

class Project extends Component {
    componentDidMount() {
        this.getPort();
    }
    getPort() {
        this.props.dispatch({ type: 'GET_PORTFOLIO' })
    }
  // Renders the entire app on the DOM
  render() {
      console.log(this.props.reduxState)
    return (
      <div className="App">
      <ul>
      {this.props.reduxState.projects.map((item) => (
         <div><li>{item.name}</li> 
         <li>{item.description}</li>
         <li><img src= {item.thumbnail} alt="image not found"/></li>
         <li><a href={item.website}>Website</a></li>
         <li><a href={item.github}>Github</a></li>
         <li>{item.date_completed}</li></div>
    ))}
      </ul>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapStateToProps)(Project);