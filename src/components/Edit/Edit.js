import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Edit extends Component {


    render() {
        return (
            <>
            </>
        )
    }
}
const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};

export default connect(mapStateToProps)(Edit);