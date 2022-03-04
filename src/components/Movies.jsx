import React,{Component} from 'react';
import Like from './Like';
class Movies extends Component {
    raiseSort = path=>{
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.path===path){
          sortColumn.order = (sortColumn.order==='asc')?'desc':'asc';
        }
        else{
          sortColumn.order = 'asc';
          sortColumn.path = path;
        }
        this.props.onSort(sortColumn);
    }
    render() { 
        const {length:count} = this.props.movies;
        if(count===0) return (<p className='lead mt-5'>There are no movies in the database</p>);
        const {movies,onClick,onDelete} = this.props;

        return (
            <div>
                <p className="mt-5 lead">Showing {count} movies in the database</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th onClick={()=>this.raiseSort('title')}>Title</th>
                            <th onClick={()=>this.raiseSort('genre.name')}>Genre</th>
                            <th onClick={()=>this.raiseSort('numberInStock')}>Stock</th>
                            <th onClick={()=>this.raiseSort('dailyRentalRate')}>Rate</th>
                            <th />
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(movie=>(
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><Like liked={movie.liked} onClick={()=>onClick(movie)}/></td>
                                <td><button className='btn btn-danger' onClick={()=>onDelete(movie)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Movies;
