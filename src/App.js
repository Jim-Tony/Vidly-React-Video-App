import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
import ListGenres from './components/ListGenres';
import {getMovies} from './services/fakeMovieService';
import { getGenres } from './services/fakeGenreService';
import {paginate} from './utils/paginate';
import PropTypes from 'prop-types';
class App extends Component {
  state = {
    currentPage:1,
    pageSize:4,
    movies:[],
    genres:[],
  };
  componentDidMount(){
    this.setState({movies:getMovies(),genres:getGenres()});
  }
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
  handleGenreSelect = genre=>{
    const moviesGenre = [...this.state.movies];
    this.setState({movies:moviesGenre.filter(m=>m.genre.name===genre)});
  }
  render() { 
    const count = this.state.movies.length;
    const {currentPage,pageSize,movies:moviesAll} = this.state;
    const movies = paginate(moviesAll,currentPage,pageSize);
    return (
      <main className='container'>
        <div className='row'>
          <div className='col-2 mt-5'>
            <ListGenres 
              items={this.state.genres} 
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className='col'>
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
          </div>
        </div>
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