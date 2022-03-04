import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
import ListGenres from './components/ListGenres';
import {getMovies} from './services/fakeMovieService';
import { getGenres } from './services/fakeGenreService';
import {paginate} from './utils/paginate';
import PropTypes from 'prop-types';
import _ from 'lodash';
class App extends Component {
  state = {
    currentPage:1,
    pageSize:4,
    movies:[],
    genres:[],
    currentGenre:{_id:'',name:'All Genres'},
    sortColumn:{path:'title',order:'asc'}
  };
  componentDidMount(){
    const genres = [{_id:'',name:'All Genres'},...getGenres()];
    this.setState({movies:getMovies(),genres});
  }
  handleLike = movie=>{
    const movies = [...this.state.movies];
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
    this.setState({currentGenre:genre,currentPage:1});
  }
  handleSort = path=>{
    const sortColumn = {...this.state.sortColumn};
    if(sortColumn.path===path){
      sortColumn.order = (sortColumn.order==='asc')?'desc':'asc';
    }
    else{
      sortColumn.order = 'asc';
      sortColumn.path = path;
    }
    this.setState({sortColumn});
  }
  render() { 
    const {currentPage,pageSize,currentGenre,movies:moviesAll,sortColumn} = this.state;
    //Filtering
    const filtered = (currentGenre && currentGenre._id) ? moviesAll.filter(m=>m.genre._id===currentGenre._id) : moviesAll;
    //Sorting 
    const sortedMovies = _.orderBy(filtered,[sortColumn.path],[sortColumn.order]);
    const movies = paginate(sortedMovies,currentPage,pageSize);
    return (
      <main className='container'>
        <div className='row'>
          <div className='col-2 mt-5'>
            <ListGenres 
              items={this.state.genres} 
              onItemSelect={this.handleGenreSelect}
              selectedGenre = {this.state.currentGenre}
            />
          </div>
          <div className='col'>
            <Movies 
              movies={movies}
              onDelete = {this.handleDelete}  
              onClick = {this.handleLike}
              onSort = {this.handleSort}
            />
            <Pagination 
              itemCount = {filtered.length}
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