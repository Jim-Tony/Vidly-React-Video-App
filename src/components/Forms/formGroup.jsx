import React from 'react';
const FormGroup = (props) => {
    const {name,label,onChange,value,type} = props;
    return ( 
        <div className='form-group mb-3'>
            <label className='form-label' htmlFor={name}>{label}</label>
            <input name={name} onChange={onChange} value={value} autoFocus={name==='username'?true:false} autoComplete='off' className='form-control' id={name} type={type} />
        </div>
    );
}
 
export default FormGroup;