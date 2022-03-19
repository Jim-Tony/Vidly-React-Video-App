import React from 'react';
const SearchBox = ({value,onChange}) => {
    return (  
            <input 
                name='query' 
                value={value}
                onChange={e=>onChange(e.currentTarget.value)} 
                type="text" 
                placeholder='Search...' 
                className='form-control w-50'
                autoComplete='off'
            />
    );
}
 
export default SearchBox;