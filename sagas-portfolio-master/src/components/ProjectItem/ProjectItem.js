import React, { Component } from 'react';

class ProjectItem extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <div className="imgleft">
        <img src= {this.props.item.thumbnail} alt="image not found"/>
        </div>
        <div>{this.props.item.name} <a href={this.props.item.website}>Website</a> <a href={this.props.item.github}>Github</a></div>
        <div>{this.props.item.description}</div>
      </div>
    );
  }
}

export default ProjectItem;
