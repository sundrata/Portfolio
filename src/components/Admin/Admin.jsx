import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {
    render() {

        return (
            <div>
            <h3>Add a project</h3>
            <hr></hr>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Admin);