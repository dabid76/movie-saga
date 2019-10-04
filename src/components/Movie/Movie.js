import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Movie extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'GET_MOVIE'})
    }

    movieDetails(id) {
        console.log('btn pic getting click')
        this.props.history.push(`/Details/:${id}`)
        console.log(id);
        this.props.dispatch({ type: 'GET_DETAILS', payload: id });
    }

    render() {
        let films = this.props.reduxStore.movies.map((movie, id) => {
            return (
            <div className="movieList" key={movie.id} >
                <h1 key={id}>{movie.title}</h1>
                <img src={movie.poster} onClick={() => this.movieDetails(movie.id)}/>
                <p className="movieDescription">{movie.description}</p>
            </div>)
        })
        return (
            <div>
                {films}
            </div>
        )
    }
}
const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};

export default connect(mapStateToProps)(Movie);