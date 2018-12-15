import React, { Component } from 'react';
import { connect } from 'react-redux';

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
          <p>ProjectList Page</p>
          {JSON.stringify(this.props.reduxStore.projects)}
          <hr></hr>
          {JSON.stringify(this.props.reduxStore.tags)}

        </div>
      );
    }
  }

  const mapStateToProps = (reduxStore) => ({
      reduxStore
  })

  export default connect(mapStateToProps)(ProjectList);