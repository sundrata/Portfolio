import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectItem extends Component {
    state = {
        tags_id: 0
    }

    render() {
        console.log('item props:', this.props)

        //name conditional
        let nameDisplay;
        if (this.props.name) {
            nameDisplay = <div>{this.props.name}</div>
        } else {
            nameDisplay = <div></div>
        }

        //description conditional
        let descriptionDisplay;
        if (this.props.description) {
            descriptionDisplay = <div>Description: {this.props.description}</div>
        } else {
            descriptionDisplay = <div></div>
        }

        //thumbnail conditional
        let thumbnailDisplay;
        if(this.props.thumbnail){
            thumbnailDisplay = <img alt ="website thumbnail"src={this.props.thumbnail} />
        }else{
            thumbnailDisplay = <div></div>
            }

        //website conditional
        let websiteDisplay;
        if (this.props.website) {
            // eslint-disable-next-line
            websiteDisplay = <div><a href={this.props.website} target="_blank">Website</a></div>
        } else {
            websiteDisplay = <div></div>
        }

        //GitHub conditional
        let githubDisplay;
        if (this.props.github) {
            // eslint-disable-next-line
            githubDisplay = <div><a href={this.props.github} target="_blank">Github</a></div>
        } else {
            githubDisplay = <div></div>
        }

        //date_completed conditional
        let dateDisplay;
        if (this.props.date_completed) {
            dateDisplay = <div> Date Completed: {this.props.date_completed}</div>
        } else {
            dateDisplay = <div></div>
        }

        //tag_id conditional
        let tagDisplay;
        if (this.props.tag_id) {
            tagDisplay = <div>Technology Used: {this.props.tag_id}</div>
        } else {
            tagDisplay = <div></div>
        }
        return (
            <div>
                <hr></hr>
                <div id="nameDisplay">{nameDisplay}</div>
                <div id="thumbnail">{thumbnailDisplay}</div>
                <div>{descriptionDisplay}</div>
                <div>{websiteDisplay}</div>
                <div>{githubDisplay}</div>
                <div>{dateDisplay}</div>
                <div>{tagDisplay}</div>
            </div>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(ProjectItem);