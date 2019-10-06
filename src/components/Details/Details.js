import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    state = {
        movie: []
    } // end state

    componentDidMount() {
        this.ID()
    } // end componentDidMount

    ID = (id) => {
        console.log(this.props.match.params.id)
        this.props.dispatch({ type: 'GET_DETAILS', payload: this.props.match.params.id  })
    } // end ID

    backBtn = () => {
        console.log('back btn click')
        this.props.history.push('/')
    } // end backBtn
    
    editBtn = (id) => {
        console.log('edit btn click')
        this.props.history.push(`/Edit/${this.props.match.params.id}`)
    } // end editBtn

    render() {

        let movieTitle;
        let moviePoster;
        let movieDescription;

        let filmInfo = this.props.reduxStore.genres.map((movie, id) => {
            if( id === 0) {
                movieTitle = <h1 key={id}>{movie.title}</h1>;
                moviePoster = <img alt={movie.poster} src={movie.poster} />;
                movieDescription = <p>{movie.description}</p>;
            }
            return (<ul key={movie.id}><li><span>{movie.name}</span></li></ul>)
        }) // end map
        return (
            <div className="description">
                <button  onClick = {this.backBtn}>Back to Movies</button>
                <button  onClick = {this.editBtn}>Edit</button>
                {movieTitle}
                {moviePoster}
                {movieDescription}
                {filmInfo}
            </div>
        ); // end return
    } // end render
} // end Details component
const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }; // end return
}; // end mapStateToProps

export default connect(mapStateToProps)(Details);