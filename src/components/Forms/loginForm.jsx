import React, { Component } from 'react';
import FormGroup from './formGroup';
class LoginForm extends Component { 
    state={
        account:{username:'',password:''},
        errors:{},
    };
    validateProperty = ({name,value})=>{
        if(name==='username'){
            if(value.trim()==='') return 'Username is required'
        }
        if(name==='password'){
            if(value.trim()==='') return 'Password is required'
        }
    }
    handleChange = ({currentTarget:input})=>{
        const errors = {...this.state.errors};
        const errorMsg = this.validateProperty(input);
        if(errorMsg) errors[input.name] = errorMsg;
        const account = {...this.state.account};
        account[input.name] = input.value
        this.setState({account,errors});
    }
    validate = ()=>{
        const {account} = this.state;
        const errors = {};
        if(account.username.trim()==='') errors.username = 'Username is required';
        if(account.password.trim()==='') errors.password = 'Password is required'; 
        return Object.keys(errors).length === 0 ? null:errors;
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
                    <button className="btn btn-primary btn-center">Login</button>
                </form>    
            </div>
        );
    }
}
export default LoginForm;