import React from 'react';
const Input = (props) => {
    const {name,label,onChange,value,type,error} = props;
    return ( 
        <div className='form-group mb-3'>
            <label className='form-label' htmlFor={name}>{label}</label>
            <input  name={name} onChange={onChange} value={value} autoFocus={name==='username'?true:false} autoComplete='off' className='form-control' id={name} type={type} />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}
 
export default Input;