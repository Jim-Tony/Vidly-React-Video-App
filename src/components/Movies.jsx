import React, { Component } from 'react';
import Like from './Like';
class Movies extends Component{
    render(){
        const {length:count} = this.props.movies;
        if(count===0) return (<p className='lead mt-5'>There are no movies in the database</p>);
        return(
            <div>
                <p className="mt-5 lead">Showing {count} movies in the database</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th />
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.movies.map(movie=>(
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><Like liked={movie.liked} onClick={()=>this.props.onClick(movie)}/></td>
                                <td><button className='btn btn-danger' onClick={()=>this.props.onDelete(movie)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Movies;