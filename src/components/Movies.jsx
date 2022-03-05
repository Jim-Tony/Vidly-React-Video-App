import React,{Component} from 'react';
import Like from './Like';
import TableHeader from './TableHeader';
class Movies extends Component {
    columns = [
        {path:'title',label:'Title'},
        {path:'genre.name',label:'Genre'},
        {path:'numberInStock',label:'Stock'},
        {path:'dailyRentalRate',label:'Rate'},
        // {key:'emptyOne'},
        // {key:'emptyTwo'},
    ]
    render() { 
        const {length:count} = this.props.movies;
        if(count===0) return (<p className='lead mt-5'>There are no movies in the database</p>);
        const {movies,onClick,onDelete,sortColumn,onSort} = this.props;
        return (
            <div>
                <p className="mt-5 lead">Showing {count} movies in the database</p>
                <table className="table">
                    <TableHeader 
                        columns={this.columns}
                        sortColumn = {sortColumn}
                        onSort={onSort}
                    />
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
