import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';

class Edit extends Component {

    state = {
        editInfo: {
                id: '',
                title: '',
                description: '',
            } // end editInfo
        } // end state

    componentDidMount() {
        this.infoDetails();
    } // end componentDidMount

    infoDetails = () => {
        {this.props.reduxStore.genres.map((movieInfo) => {
            this.setState({
                editInfo: {
                    id: movieInfo.id,
                    title: movieInfo.title,
                    description: movieInfo.description,
                } // end editInfo
            }) // end setState
        })} // end map
    } // end infoDetails

    cancelBtn = (id) => {
        this.props.history.push(`/Details/${this.props.match.params.id}`)
    } // end cancelBtn

    saveBtn = (id) => {
        this.props.dispatch({type:'NEW_INFO', payload: this.state.editInfo})
        this.props.history.push(`/`);
    } // end saveBtn

    handleChange = (event, propertyName) => {
        this.setState({
            editInfo: {
              ...this.state.editInfo,
             [propertyName]: event.target.value,
            } // end editInfo
        }) // end setState
        console.log('in handleChange')
    } // end handleChange

    render() {
            return (
 
            <div className="editBox">
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.cancelBtn}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.saveBtn}
          >
            Save
          </Button>
        </div>
                <br/>
                <br/>
                <p>Title</p>
                <input placeholder="Title" type='text' value={this.state.editInfo.title} onChange = {(event) => this.handleChange(event, 'title')}  />
                <br/>
                <p>Description</p>
                <textarea placeholder="Description" value={this.state.editInfo.description} onChange = {(event) => this.handleChange(event, 'description')} rows="4" cols="50"></textarea>
            </div>
        ) // end return
    } // end render
} // end Edit component
const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }; // end return
}; // end mapStateToProps

export default connect(mapStateToProps)(Edit);