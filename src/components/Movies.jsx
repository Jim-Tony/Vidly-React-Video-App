import React,{Component} from 'react';
import Like from './Like';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
class Movies extends Component {
    columns = [
        {path:'title',label:'Title'},
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
                <table className="table">
                    <TableHeader 
                        columns={this.columns}
                        sortColumn = {sortColumn}
                        onSort={onSort}
                    />
                    <TableBody 
                        data = {movies} 
                        columns={this.columns} 
                    />
                </table>
            </div>
        );
    }
}
export default Movies;
