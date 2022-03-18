import React, { Component } from 'react';
import Joi  from 'joi-browser';
import Input from './input';
import Select from './select';
class Form extends Component {
    state = {
        data:{},
        errors:{},
    };
    validateProperty = ({name,value})=>{
        const schema = {[name]:this.schema[name]};
        const {error} = Joi.validate({[name]:value},schema);
        if(!error) return null;
        return error.details[0].message;
    }
    validate = ()=>{
         const options = {abortEarly:false};
         const {error} = Joi.validate(this.state.data,this.schema,options);
         // console.log(result);
         if(!error) return null;
         const errors = {};
         error.details.forEach(e=>errors[e.path[0]] = e.message);
         return errors;
    }
    handleSubmit = e=>{ 
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors:errors||{}});
        if(errors) return;
        this.doSubmit();
    };
    handleChange = ({currentTarget:input})=>{
        const errors = {...this.state.errors};
        const errorMsg = this.validateProperty(input);
        if(errorMsg) errors[input.name] = errorMsg;
        else delete errors[input.name];
        const data = {...this.state.data};
        data[input.name] = input.value
        this.setState({data,errors});
    }
    renderButton = (label)=>{
        return <button disabled={this.validate()} className="btn btn-primary btn-center">{label}</button>
    }
    renderInput = (name,label,type)=>{
        const {data,errors} = this.state;
        return <Input
            name={name}
            label={label}
            value={data[name]}
            type={type}
            onChange={this.handleChange}
            error={errors[name]}
        />
    }
    renderSelect = (name,label,options)=>{
        const {data,errors} = this.state;
        return <Select
            name={name}
            label={label}
            options={options}
            value={data[name]}
            error={errors[name]}
            onChange={this.handleChange}
        />
    }
}
 
export default Form;