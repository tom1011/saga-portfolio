import React, { Component } from 'react';

class ProjectItem extends Component {
    // Renders the entire app on the DOM
    render() {
        // conditional rendering of the stuff
        let websiteLink = ''
        let githubLink = ''
        let imgLink = null
        let completeDate = ''
        if (this.props.item.website === null || this.props.item.website ==='') {
            // console.log('in if statement of website')
        }
        else {
            // console.log('in ele statment of website')
            websiteLink = <a href={this.props.item.website} target="_blank">Website</a>
            // console.log(websiteLink)
        }
        if (this.props.item.github === null || this.props.item.github === '') {
        }
        else {
            githubLink = <a href={this.props.item.github} target="_blank">Git Hub Repo</a>
        }
        if (this.props.item.thumbnail === null || this.props.item.thumbnail === '') {
        }
        else {
            imgLink = <img src="images/hydrangea.jpeg" alt="image not found" />
        }
        if (this.props.item.date_completed === null || this.props.item.date_completed === '') {
        }
        else {
            completeDate = <div>{this.props.item.date_completed}</div>
        }
            // end conditional code 
        return (
            <div>
                <div className="imgleft">
                    <p>{imgLink}</p>
                </div>
                <div>{this.props.item.name} {websiteLink} {githubLink} {completeDate}</div>
                <div>{this.props.item.description}</div>
                <hr></hr>
            </div>
        );
    }
}

export default ProjectItem;
