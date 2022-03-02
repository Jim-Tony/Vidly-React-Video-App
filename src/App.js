import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
import {getMovies} from './services/fakeMovieService';
import {paginate} from './utils/paginate';
import PropTypes from 'prop-types';
class App extends Component {
  state = {
    currentPage:1,
    pageSize:4,
    movies:getMovies(),
  };
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
  handlePageChange = page=>{
    this.setState({currentPage:page})
  }
  render() { 
    const count = this.state.movies.length;
    const {currentPage,pageSize,movies:moviesAll} = this.state;
    const movies = paginate(moviesAll,currentPage,pageSize);
    return (
      <main className='container'>
        <Movies 
          movies={movies}
          onDelete = {this.handleDelete}  
          onClick = {this.handleLike}
        />
        <Pagination 
          itemCount = {count}
          currentPage = {currentPage} 
          pageSize={pageSize} 
          onPageChange = {this.handlePageChange} 
        />
      </main>
    );
  }
}
Pagination.propTypes = {
  itemCount:PropTypes.number.isRequired,
  currentPage:PropTypes.number.isRequired,
  pageSize:PropTypes.number.isRequired,
  onPageChange:PropTypes.func.isRequired,
}
export default App;