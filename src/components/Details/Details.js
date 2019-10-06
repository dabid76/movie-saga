import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from "@material-ui/core/Button";

// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';



// const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }));
//   const classes = useStyles();


class Details extends Component {

    state = {
        movie: []
    } // end state

    componentDidMount() {
        this.ID()
    } // end componentDidMount

    ID = (id) => {
        this.props.dispatch({ type: 'GET_DETAILS', payload: this.props.match.params.id  })
    } // end ID

    backBtn = () => {
        this.props.history.push('/')
    } // end backBtn
    
    editBtn = (id) => {
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
                        <>
                        <AppBar position="static">
                        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" >
            News
          </Typography> */}
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      </>
            <Button
              variant="contained"
              color="primary"
              onClick={this.backBtn}
            >
              Back to List
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.editBtn}
            >
              Edit
            </Button>
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