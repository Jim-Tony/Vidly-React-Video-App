import React from 'react';
const Select = (props) => {
    const {name,label,options,onChange,value,error} = props;
    return ( 
        <div className='form-group mb-3'>
            <label className='form-label' htmlFor={name}>{label}</label>
            <select name={name} onChange={onChange} value={value} className='form-control' id={name} >
                <option value=""/>
                {options.map(option=><option key={option._id} value={option._id}>{option.name}</option>)}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}
 
export default Select;