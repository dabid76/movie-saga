import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Details extends Component {

    backBtn = () => {
        console.log('back btn click')
        this.props.history.push('/')

    }
    
    EditBtn = () => {
        console.log('edit btn click')
        this.props.history.push('/Edit')
    }

    render() {
        return (
            <>
                <button  onClick = {this.backBtn}>Back</button>
                <button  onClick = {this.EditBtn}>Edit</button>
            </>
        )
    }
}
const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};

export default connect(mapStateToProps)(Details);