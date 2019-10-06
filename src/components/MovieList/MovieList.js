import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'GET_MOVIE'})
    } // end componentDidMount

    movieDetails(id) {
        console.log('btn pic getting click')
        this.props.history.push(`/Details/${id}`)
        console.log(id);
        this.props.dispatch({ type: 'GET_DETAILS', payload: id });
    } // end movieDetails

    render() {
        let films = this.props.reduxStore.movies.map((movie, id) => {

            return (
            <div className="movieList" key={movie.id} >
                    <h1 key={id}>{movie.title}</h1>
                    <img src={movie.poster} alt={movie.poster} onClick={() => this.movieDetails(movie.id)}/>
            </div>)
        }) // end map
        return (
            <div>
                {films}
            </div>
        ) // end return
    } // end render
} // end MovieList component
const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }; // end return
}; // end mapStateToProps

export default connect(mapStateToProps)(MovieList);