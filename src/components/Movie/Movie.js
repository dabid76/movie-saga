import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Movie extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'GET_MOVIE'})
    }

    movieDetails(id) {
        console.log('btn pic getting click')
        this.props.history.push('/Details')
        this.props.dispatch({ type: 'GET_DETAILS', payload: id });
        console.log(id);
    }

    render() {
        let films = this.props.reduxStore.movies.map((movie, index) => {
            return (<div key={index} onClick={() => this.movieDetails(movie.id)}>
                <h1>{movie.title}</h1>
                <img src={movie.poster} />
                <p>{movie.description}</p></div>)
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