import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Movies from './Movies';
import Pagination from './Pagination';
import ListGenres from './ListGenres';
import SearchBox from './searchBox';
import {getMovies} from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import {paginate} from '../utils/paginate';
import PropTypes from 'prop-types';
import _ from 'lodash';
class MoviesTable extends Component {
    state = {
        currentPage:1,
        pageSize:4,
        movies:[],
        genres:[],
        currentGenre:null,
        searchQuery:'',
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
      handleSearch = query=>{
        this.setState({searchQuery:query,currentGenre:null,currentPage:1})
      }
      handlePageChange = page=>{
        this.setState({currentPage:page})
      }
      handleGenreSelect = genre=>{
        this.setState({currentGenre:genre,searchQuery:"",currentPage:1});
      }
      handleSort = sortColumn=>{
        this.setState({sortColumn});
      }
      getPagedData = ()=>{
        const {currentPage,pageSize,currentGenre,movies:moviesAll,sortColumn,searchQuery} = this.state;
        let filtered = moviesAll;
        //Filtering
        if(searchQuery){
          filtered = moviesAll.filter(m=>m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
        }
        else if(currentGenre && currentGenre._id){
          filtered = moviesAll.filter(m=>m.genre._id===currentGenre._id);
        }
        //Sorting 
        const sortedMovies = _.orderBy(filtered,[sortColumn.path],[sortColumn.order]);
        //Paginating
        const movies = paginate(sortedMovies,currentPage,pageSize);
        return {totalCount:filtered.length,movies};
      }
      render() { 
        const {currentPage,pageSize,sortColumn,searchQuery} = this.state;
        const {totalCount,movies} = this.getPagedData();
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
                <Link to="/movies/new" className="btn btn-primary" style={{marginBottom:-40,marginTop:50}}>New Movie</Link>
                <div style={{marginTop:50,marginBottom:-40}}>
                  <SearchBox value={searchQuery} onChange={this.handleSearch}/>
                </div>
                <Movies
                  movies={movies}
                  sortColumn={sortColumn}
                  onDelete = {this.handleDelete}  
                  onClick = {this.handleLike}
                  onSort = {this.handleSort}
                />
                <Pagination 
                  itemCount = {totalCount}
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
export default MoviesTable;