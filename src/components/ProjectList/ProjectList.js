import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from '../ProjectItem/ProjectItem'
class ProjectList extends Component { 
    componentDidMount() {
        this.getProjects();
        this.getTags();
        console.log(this.props.reduxStore.projects)
      }
    
      getProjects() {
        this.props.dispatch({ type: 'FETCH_PROJECTS' })
      }

      getTags() {
        this.props.dispatch({type : 'FETCH_TAGS'})
      }

    render() {
      return (
        <div>
          <p id="title">Weekend Project Showcase</p>
          {this.props.reduxStore.projects.map((eachItem)=>{
              return(
                  <ProjectItem key={eachItem.id} name={eachItem.name} description={eachItem.description} thumbnail={eachItem.thumbnail} website={eachItem.website} github={eachItem.github} date_completed={eachItem.date_completed} tag_id={eachItem.tag_id}/>
              )
          })}
          {/* {JSON.stringify(this.props.reduxStore.projects)} */}
          <hr></hr>
          {/* {JSON.stringify(this.props.reduxStore.tags)} */}

        </div>
      );
    }
  }

  const mapStateToProps = (reduxStore) => ({
      reduxStore
  })

  export default connect(mapStateToProps)(ProjectList);