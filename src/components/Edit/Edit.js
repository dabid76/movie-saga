import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Edit extends Component {

    state = {
        editInfo: {
                id: '',
                title: '',
                description: '',
                // poster: '',
            }
        }

    componentDidMount() {
        this.infoDetails();
    }

    infoDetails = () => {
        {this.props.reduxStore.genres.map((movieInfo) => {
            this.setState({
                editInfo: {
                    id: movieInfo.id,
                    title: movieInfo.title,
                    description: movieInfo.description,
                    // poster: movieInfo.poster,
                }
            })
        })}
    }

    cancelBtn = (id) => {
        console.log('cancel btn click')
        this.props.history.push(`/Details/:${this.state.editInfo.id}`)
    }

    saveBtn = (id) => {
        console.log('save btn click')
        this.props.dispatch({type:'NEW_INFO', payload: this.state.editInfo})
        console.log(this.state);
        this.props.history.push(`/`);
    }

    // titleChange = (event) => {
    //     console.log('title input')
    //     this.setState({
    //             ...this.state.newInfo,
    //             title: event.target.value,
    //     });
    // }

    handleChange = (event, propertyName) => {
        this.setState({
            editInfo: {
              ...this.state.editInfo,
             [propertyName]: event.target.value,
            }
          })
        console.log('in handleChange')
    }

    // descriptionChange = (event) => {
    //     console.log('description input')
    //     this.setState({
    //             ...this.state.newInfo,
    //             description: event.target.value,
    //     });
    // }

    render() {
        // let filmsInfo = this.props.reduxStore.genres.map((movie, id) => {
            return (
            //     <div>
            // <button key = {index} onClick={() => this.saveBtn(movie.movie_id)}>Save</button>
            //     </div>
            // )
        // })
        // return (
            <div>
                <button  onClick = {this.cancelBtn}>Cancel</button>
                <button  onClick = {this.saveBtn}>Save</button>
                {/* <button onClick={() => this.saveBtn(movie.movie_id)}>Save</button> */}
                <br/>
                <br/>
                <p>Title</p>
                <input placeholder="Title" type='text' value={this.state.editInfo.title} onChange = {(event) => this.handleChange(event, 'title')}  />
                <br/>
                <p>Description</p>
                <textarea placeholder="Description" value={this.state.editInfo.description} onChange = {(event) => this.handleChange(event, 'description')} rows="4" cols="50"></textarea>
            </div>
            // )})
                // return (
            // <div>
            //     {filmsInfo}
            // </div>
        )
    }
}
const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};

export default connect(mapStateToProps)(Edit);