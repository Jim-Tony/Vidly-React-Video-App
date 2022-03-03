import React from 'react';

const ListMovies = (props) => {
    const {items,valueProperty,textProperty} = props;
    return (  
            <ul className="list-group">
                <li className="list-group-item">All Genres</li>
                {items.map(g=>
                    <li key={g[valueProperty]} className='list-group-item' onClick={()=>props.onItemSelect(g[textProperty])}>{g[textProperty]}</li>)
                }
            </ul>
    );
}
ListMovies.defaultProps = {
    textProperty:"name",
    valueProperty:"_id",
}; 
export default ListMovies;