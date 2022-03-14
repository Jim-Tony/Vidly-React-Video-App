import React from 'react';
const FormGroup = (props) => {
    return ( 
        <div className='form-group mb-3'>
            <label className='form-label' htmlFor={props.name}>{props.label}</label>
            <input name={props.name} onChange={props.onChange} value={props.value} autoFocus={props.name==='username'?true:false} autoComplete='off' className='form-control' id={props.name} type={props.type} />
        </div>
    );
}
 
export default FormGroup;