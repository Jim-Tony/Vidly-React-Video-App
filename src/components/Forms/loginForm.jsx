import React, { Component } from 'react';
import Joi from 'joi-browser';
import FormGroup from './formGroup';
class LoginForm extends Component { 
    state={
        account:{username:'',password:''},
        errors:{},
    };
    schema={
        username:Joi.string().required().label('Username'),
        password:Joi.string().required().label('Password')
    };
    validateProperty = ({name,value})=>{
       const schema = {[name]:this.schema[name]};
       const {error} = Joi.validate({[name]:value},schema);
       if(!error) return null;
       return error.details[0].message;
    }
    validate = ()=>{
        const options = {abortEarly:false};
        const {error} = Joi.validate(this.state.account,this.schema,options);
        // console.log(result);
        if(!error) return null;
        const errors = {};
        error.details.forEach(e=>errors[e.path[0]] = e.message);
        return errors;
    }
    handleChange = ({currentTarget:input})=>{
        const errors = {...this.state.errors};
        const errorMsg = this.validateProperty(input);
        if(errorMsg) errors[input.name] = errorMsg;
        else delete errors[input.name];
        const account = {...this.state.account};
        account[input.name] = input.value
        this.setState({account,errors});
    }
    handleSubmit = e=>{ 
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors:errors||{}});
        // console.log(errors);
        if(errors) return;
        
    };
    render() { 
        const {account,errors} = this.state;
        return (
            <div className="center">
                <h1 className='text-center'>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup
                        name="username"
                        label="Username"
                        value={account.username}
                        type="text"
                        onChange={this.handleChange}
                        error={errors.username}
                    />
                    <FormGroup
                        name="password"
                        label="Password"
                        value={account.password}
                        type="password"
                        onChange={this.handleChange}
                        error={errors.password}
                    />
                    <button disabled={this.validate()} className="btn btn-primary btn-center">Login</button>
                </form>    
            </div>
        );
    }
}
export default LoginForm;