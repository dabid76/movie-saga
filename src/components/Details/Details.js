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
        let movieTitle;
        let moviePoster;
        let movieDescription;

        let filmInfo = this.props.reduxStore.genres.map((movie, index) => {
            if( index === 0) {
                movieTitle = <h1>{movie.title}</h1>;
                moviePoster = <img src={movie.poster} />;
                movieDescription = <p>{movie.description}</p>;
            }
            return (<ul key = {index}><li>{movie.name}</li></ul>)
        })
        return (
            <div>
                <button  onClick = {this.backBtn}>Back</button>
                <button  onClick = {this.EditBtn}>Edit</button>
            <div className="movieList">
                {movieTitle}
                {moviePoster}
                {movieDescription}
                {filmInfo}
            </div>
            </div>
        );
    }
}
const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};

export default connect(mapStateToProps)(Details);