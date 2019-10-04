import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Edit extends Component {

    state = {
    }

    cancelBtn = () => {
        console.log('cancel btn click')
        this.props.history.push(`/Details`)
    }

    saveBtn = (id) => {
        console.log('save btn click')
        this.props.dispatch({type:'NEW_INFO', payload: {title: this.state.title, description: this.state.description, id: id}})
        console.log(this.state);
        this.props.history.push('/');
    }

    titleChange = (event) => {
        console.log('title input')
        this.setState({
                ...this.state.newInfo,
                title: event.target.value,
        });
    }

    descriptionChange = (event) => {
        console.log('description input')
        this.setState({
                ...this.state.newInfo,
                description: event.target.value,
        });
    }

    render() {
        let filmsInfo = this.props.reduxStore.genres.map((movie, index) => {
            return (
            //     <div>
            // <button key = {index} onClick={() => this.saveBtn(movie.movie_id)}>Save</button>
            //     </div>
            // )
        // })
        // return (
            <div>
                <button  onClick = {this.cancelBtn}>Cancel</button>
                <button key = {index} onClick={() => this.saveBtn(movie.movie_id)}>Save</button>
                <br/>
                <br/>
                <input placeholder="Title" type='text' value={this.state.newTitle} onChange={this.titleChange} />
                <br/>
                <textarea placeholder="Description" value={this.state.newDescription} onChange={this.descriptionChange} rows="4" cols="50"></textarea>
            </div>
            )})
                return (
            <div>
                {filmsInfo}
            </div>
        )
    }
}
const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};

export default connect(mapStateToProps)(Edit);