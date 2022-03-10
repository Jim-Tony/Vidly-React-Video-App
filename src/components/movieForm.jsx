import React from 'react';
const MovieForm = ({match,history}) => {
    return ( 
        <div className='m-5'>
            <h1>Movie Form {match.params._id}</h1>
            <button className="btn btn-primary" onClick={()=>history.push('/movies')}>Save</button>
        </div>
    );
}
 
export default MovieForm;