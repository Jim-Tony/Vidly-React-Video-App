import React from 'react';
import Form from './form';
import Joi from 'joi-browser';
class RegisterForm extends Form {
    state= {
        data:{username:'',password:'',name:''},
        errors:{},
    } 
    schema ={
        username:Joi.string().email().required().label('Username'),
        password:Joi.string().min(5).required().label('Password'),
        name:Joi.string().required().label('Name'),
    }
    doSubmit = ()=>{
        console.log('Registered');
    }
    render() { 
        return (
            <div className="center">
                <h1 className="text-center">Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderFormGroup('username','Username','email')}
                    {this.renderFormGroup('password','Password','password')}
                    {this.renderFormGroup('name','Name','text')}
                    {this.renderButton('Register')}
                </form>
            </div>
        );
    }
}
 
export default RegisterForm;