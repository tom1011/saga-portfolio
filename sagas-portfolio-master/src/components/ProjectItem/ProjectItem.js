import React, { Component } from 'react';

class ProjectItem extends Component {
    // Renders the entire app on the DOM
    render() {
        // conditional rendering of the stuff
        let websiteLink = ''
        let githubLink = ''
        let imgLink = null
        if (this.props.item.website === null) {
            // console.log('in if statement of website')
        }
        else {
            // console.log('in ele statment of website')
            websiteLink = <a href={this.props.item.website} target="_blank">Website</a>
            // console.log(websiteLink)
        }
        if (this.props.item.website === null) {
        }
        else {
            githubLink = <a href={this.props.item.github} target="_blank">Git Hub Repo</a>
        }
        if (this.props.item.thumbnail === null) {
        }
        else {
            imgLink = <img src="images/hydrangea.jpeg" alt="image not found" />
        }

        return (
            <div>
                <div className="imgleft">
                    <p>{imgLink}</p>
                </div>
                <div>{this.props.item.name} {websiteLink} {githubLink}</div>
                <div>{this.props.item.description}</div>
            </div>
        );
    }
}

export default ProjectItem;
