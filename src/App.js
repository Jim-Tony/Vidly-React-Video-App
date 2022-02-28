import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
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
  handlePageChange = ()=>{
    console.log('Page changed');
  }
  render() { 
    return (
      <main className='container'>
        <Movies 
          movies={this.state.movies}
          onDelete = {this.handleDelete}  
          onClick = {this.handleLike}
        />
        <Pagination itemCount = {this.state.movies.length} pageSize={4} onPageChange = {this.handlePageChange} />
      </main>
    );
  }
}
 
export default App;