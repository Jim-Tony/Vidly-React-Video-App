import React from 'react';
import Like from './Like';
const Movies = (props) => {
    const {length:count} = props.movies;
    if(count===0) return (<p className='lead mt-5'>There are no movies in the database</p>);
    const {movies,onClick,onDelete} = props;
    return (
            <div>
                <p className="mt-5 lead">Showing {count} movies in the database</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th onClick={()=>onSort('title')}>Title</th>
                            <th onClick={()=>onSort('genre.name')}>Genre</th>
                            <th onClick={()=>onSort('numberInStock')}>Stock</th>
                            <th onClick={()=>onSort('dailyRentalRate')}>Rate</th>
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
 
export default Movies;
