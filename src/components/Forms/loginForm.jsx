import React from 'react';
import Joi from 'joi-browser';
import FormGroup from './formGroup';
import Form from './form';
class LoginForm extends Form { 
    state={
        data:{username:'',password:''},
        errors:{},
    };
    schema={
        username:Joi.string().required().label('Username'),
        password:Joi.string().required().label('Password')
    };
    doSubmit = ()=>{
        console.log("Submitted");
    }
    render() { 
        const {data,errors} = this.state;
        return (
            <div className="center">
                <h1 className='text-center'>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup
                        name="username"
                        label="Username"
                        value={data.username}
                        type="text"
                        onChange={this.handleChange}
                        error={errors.username}
                    />
                    <FormGroup
                        name="password"
                        label="Password"
                        value={data.password}
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