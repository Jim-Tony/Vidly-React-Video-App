import React from 'react';

const ListMovies = (props) => {
    const {items,valueProperty,textProperty,onItemSelect,selectedGenre} = props;
    return (  
            <ul className="list-group">
                {items.map(g=>
                    <li key={g[valueProperty]} className={selectedGenre===g?'list-group-item active':'list-group-item'} onClick={()=>onItemSelect(g)}>{g[textProperty]}</li>)
                }
            </ul>
    );
}
ListMovies.defaultProps = {
    textProperty:"name",
    valueProperty:"_id",
}; 
export default ListMovies;