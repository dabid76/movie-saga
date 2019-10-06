import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Edit extends Component {

    state = {
        editInfo: {
                id: '',
                title: '',
                description: '',
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
                }
            })
        })}
    }

    cancelBtn = (id) => {
        console.log('cancel btn click')
        this.props.history.push(`/Details/${this.props.match.params.id}`)
    }

    saveBtn = (id) => {
        console.log('save btn click')
        this.props.dispatch({type:'NEW_INFO', payload: this.state.editInfo})
        console.log(this.state);
        this.props.history.push(`/`);
    }

    handleChange = (event, propertyName) => {
        this.setState({
            editInfo: {
              ...this.state.editInfo,
             [propertyName]: event.target.value,
            }
          })
        console.log('in handleChange')
    }

    render() {
            return (
 
            <div className="editBox">
                <button  onClick = {this.cancelBtn}>Cancel</button>
                <button  onClick = {this.saveBtn}>Save</button>
                <br/>
                <br/>
                <p>Title</p>
                <input placeholder="Title" type='text' value={this.state.editInfo.title} onChange = {(event) => this.handleChange(event, 'title')}  />
                <br/>
                <p>Description</p>
                <textarea placeholder="Description" value={this.state.editInfo.description} onChange = {(event) => this.handleChange(event, 'description')} rows="4" cols="50"></textarea>
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