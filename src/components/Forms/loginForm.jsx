import React from 'react';
import Joi from 'joi-browser';
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
       
        return (
            <div className="center">
                <h1 className='text-center'>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderFormGroup('username','Username','text')}
                    {this.renderFormGroup('password','Password','password')}
                    {this.renderButton("Login")}
                </form>    
            </div>
        );
    }
}
export default LoginForm;