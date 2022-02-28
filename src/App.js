import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';
import {getMovies} from './services/fakeMovieService';
class App extends Component {
  state = {
    movies:getMovies(),
  };
  // checkLike = ()=>{
  //   return this.state.movies.
  // } 
  handleLike = movie=>{
    const movies = this.state.movies;
    const index = this.state.movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({movies}); 
  }
  handleDelete = movie=>{
    const newMovies = this.state.movies.filter(obj=>obj._id!==movie._id);
    this.setState({movies:newMovies}); 
  }
  render() { 
    return (
      <main className='container'>
        <Movies 
          movies={this.state.movies}
          onDelete = {this.handleDelete}  
          onClick = {this.handleLike}
        />
      </main>
    );
  }
}
 
export default App;