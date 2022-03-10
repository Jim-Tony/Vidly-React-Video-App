import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Like from './Like';
import Table from './Table';
class Movies extends Component {
    columns = [
        {path:'title',label:'Title',content: movie=><Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path:'genre.name',label:'Genre'},
        {path:'numberInStock',label:'Stock'},
        {path:'dailyRentalRate',label:'Rate'},
        {key:'like',content:movie=><Like liked={movie.liked} onClick={()=>this.props.onClick(movie)}/>},
        {key:'delete',content:movie=><button className='btn btn-danger' onClick={()=>this.props.onDelete(movie)}>Delete</button>},
    ]
    render() { 
        const {length:count} = this.props.movies;
        if(count===0) return (<p className='lead mt-5'>There are no movies in the database</p>);
        const {movies,sortColumn,onSort} = this.props;
        return (
            <div>
                <p className="mt-5 lead">Showing {count} movies in the database</p>
                <Table 
                    columns={this.columns}
                    data = {movies}
                    onSort = {onSort}
                    sortColumn = {sortColumn}
                />
            </div>
        );
    }
}
export default Movies;
